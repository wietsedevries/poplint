const fs = require('fs');
const path = require('path');

const base = require('./output/base.json');
const data = require('./data');
const googleConfig = require('./presets/google.js');
const airBnbConfig = require('./presets/airBnb.js');
const standardJsConfig = require('./presets/standardJs.js');

/**
 * Get all external eslint config files
 * @returns {object}
 */
const getRules = () => {
  const libRules = {};
  Object.values(data).forEach((lib, index) => {
    const key = Object.keys(data)[index];
    libRules[key] = lib.rules;
  });
  return libRules;
};

/**
 * Create a big ass object containing all
 * eslint configs
 */
const allConfigs = {
  google: googleConfig,
  airBnb: airBnbConfig,
  standardJs: standardJsConfig,
  ...getRules(),
};

/**
 * Transform level of rule into number
 * @param {*} level
 * @returns {number} level
 */
const ruleLevel = (level) => {
  const error = [2, '2', 'error'];
  const warn = [1, '1', 'warn', 'warning'];

  if (error.includes(level)) {
    return 2;
  }
  if (warn.includes(level)) {
    return 1;
  }
  return 0;
};

/**
 * Check if a key is present in a guide
 * @param {*} key
 * @param {*} guide
 * @returns {boolean}
 */
const getFromGuide = (key, guide) => {
  const rule = allConfigs[guide][key];
  if (!rule) {
    return undefined;
  }
  const isArray = Array.isArray(rule);
  const level = isArray ? rule[0] : rule;
  const options = isArray ? rule.slice(1) : [];
  return {
    name: guide,
    level: ruleLevel(level),
    options,
  };
};

const updateOption = (key, option, formattedOptions, guide) => {
  const { level, options = [], name } = guide || {};
  const stringifiedOptions = JSON.stringify(options);
  const result = stringifiedOptions.match(option) || [];

  const current = formattedOptions[option] || {};
  const { error = 0, warn = 0, off = 0, google = 0, airBnb = 0, standardJs = 0 } = current;

  return {
    error: (level === 2) ? (error + 1) : error,
    warn: (level === 1) ? (warn + 1) : warn,
    off: (level === 0 || !result.length) ? (off + 1) : off,
    google: (name === 'google') ? level : google,
    airBnb: (name === 'airBnb') ? level : airBnb,
    standardJs: (name === 'standardJs') ? level : standardJs,
  };
};

/**
 * Take the base rules and loop through all rules.
 * For each rule we check against the config files
 * and increment all values and options
 * @returns {array}
 */
const addGuides = () => {
  const json = [];

  // Check if base was successfully created
  if (!base || !base.length) {
    console.error('\x1b[31m%s\x1b[0m', 'Error: Failed to read base. Are you sure the \'createBase\' script has run?');
  }

  base.map((rule) => {
    const { key, options } = rule;
    const inGoogle = getFromGuide(key, 'google');
    const inAirBnb = getFromGuide(key, 'airBnb');
    const inStandardJs = getFromGuide(key, 'standardJs');
    const guides = [inGoogle, inAirBnb, inStandardJs];


    Object.keys(data).forEach((lib) => {
      guides.push(getFromGuide(key, lib));
    });

    let formattedOptions = {};
    let extra = {};
    const checkGuides = [];

    options.forEach((option) => {
      guides.filter(Boolean).forEach((guide) => {
        let newExtra = {};
        if (key === 'indent' && !checkGuides.includes(guide.name)) {
          const { values = {}, name = 'Spaces vs. tabs' } = extra;
          const { spaces2 = 0, spaces4 = 0, tabs = 0 } = values;
          const { options: extraOptions = [] } = guide || {};
          const setting = extraOptions[0];
          newExtra = {
            name,
            values: {
              spaces2: (setting === 2) ? (spaces2 + 1) : spaces2,
              spaces4: (setting === 4) ? (spaces4 + 1) : spaces4,
              tabs: (setting === 'tab') ? (tabs + 1) : tabs,
            },
          };
          checkGuides.push(guide.name);
        }

        if (key === 'semi' && !checkGuides.includes(guide.name)) {
          const { values = {}, name = 'Semi vs. No-semi' } = extra;
          const { always = 0, never = 0 } = values;
          const { options: extraOptions = [] } = guide || {};
          const setting = extraOptions[0];
          newExtra = {
            name,
            values: {
              always: (setting === 'always') ? (always + 1) : always,
              never: (setting === 'never') ? (never + 1) : never,
            },
          };
          checkGuides.push(guide.name);
        }
        const newOption = updateOption(key, option, formattedOptions, guide);
        extra = { ...extra, ...newExtra };
        formattedOptions = { ...formattedOptions, [option]: newOption, extra };
      });
    });

    let error = 0;
    let warn = 0;
    let off = 0;
    guides.forEach((guide = {}) => {
      const { level = 0 } = guide;
      if (level === 2) {
        error += 1;
      }
      if (level === 1) {
        warn += 1;
      }
      if (level === 0) {
        off += 1;
      }
    });

    const updatedRule = {
      ...rule,
      options: formattedOptions,
      google: !!inGoogle,
      airBnb: !!inAirBnb,
      standardJs: !!inStandardJs,
      error,
      warn,
      off,
    };

    return json.push(updatedRule);
  });
  return json;
};

const result = addGuides();
const outputFile = `${path.basename(__dirname)}/output/guides.json`;
fs.writeFile(outputFile, JSON.stringify(result), (err) => {
  if (err) {
    return console.error('\x1b[31m%s\x1b[0m', 'Error: Failed to create guides object');
  }
  console.error('\x1b[34m%s\x1b[0m', '📘 Guides file has been created successfully');
});
