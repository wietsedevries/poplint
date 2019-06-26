const Rules = require('eslint/lib/rules');
const fs = require('fs');
const path = require('path');

const addToUniqueArray = (value, array = []) => {
  if (array.includes(value)) {
    return false;
  }
  return array.push(value);
};

/**
 * Skippping rules which do not have any options
 * @param {string} key
 * @returns {boolean}
 */
const skipOptions = (rule) => {
  const blacklist = [
    'no-restricted-imports',
    'id-blacklist',
    'no-restricted-globals',
    'consistent-this',
    'no-restricted-modules',
    'padding-line-between-statements',
  ];
  return blacklist.includes(rule);
};

const extractOptions = (schema = [], key) => {
  let options = [];

  if (skipOptions(key)) {
    return options;
  }

  if (Array.isArray(schema) && !!schema.length) {
    schema.map((param) => {
      if (param.enum) {
        param.enum.map(value => addToUniqueArray(value, options));
      }

      if (param.properties && !!Object.entries(param.properties).length) {
        Object.keys(param.properties).map(value => addToUniqueArray(value, options));
      }

      if (!!param.oneOf || !!param.anyOf) {
        options = [...options, ...extractOptions(param.oneOf || param.anyOf, key)];
      }
    });
  } else {
    if (!!schema.definitions && !!schema.definitions.value) {
      /**
       * Only checking for definition.value and thereby skipping 1 rule
       * to avoid unneccesary complexity. Too tired for this shit :)
       * (https://eslint.org/docs/rules/padding-line-between-statements)
       */
      const { value: { enum: arr } } = schema.definitions;
      arr.map(value => addToUniqueArray(value, options));
    }

    if (schema.anyOf) {
      schema.anyOf.forEach((option) => {
        options = [...options, ...extractOptions(option.items, key)];
      });
    }

    if (schema.items) {
      options = [...options, ...extractOptions(schema.items, key)];
    }
  }
  return options;
};

const getEslintRules = () => {
  const eslintRules = new Rules();
  const allRules = eslintRules.getAllLoadedRules();
  const rules = [];
  [...allRules.entries()].forEach((rule) => {
    const key = rule[0];
    const { docs, fixable, schema } = rule[1].meta;
    const { description, recommended, url, category } = docs;
    const options = extractOptions(schema, key);

    rules.push({
      key,
      eslint: recommended,
      description,
      category,
      url,
      fixable,
      options,
    });
  });

  return rules;
};

const rules = getEslintRules();
const outputFile = `${path.basename(__dirname)}/output/base.json`;
fs.writeFile(outputFile, JSON.stringify(rules), (err) => {
  if (err) {
    return console.error('\x1b[31m%s\x1b[0m', 'Error: Failed to create base object');
  }
  console.error('\x1b[34m%s\x1b[0m', '📘 Base file has been created successfully');
});
