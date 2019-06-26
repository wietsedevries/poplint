import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useIntersectionObserver } from '../utils/hooks';

import { Loader, Button } from '../ui';

const PaginatorWrapper = styled.div`
  margin: ${props => props.theme.fn.spacing(4)} 0 ${props => props.theme.fn.spacing(10)};
  text-align: center;
`;

const Paginator = ({ loadMore, spin: defaultSpin }) => {
  /**
   * Check if browser supperts intersection observer
   * Will no be using a polyfill.
   */
  const observerExists = (
    typeof window !== 'undefined'
    && 'IntersectionObserver' in window
    && 'IntersectionObserverEntry' in window
    && 'intersectionRatio' in window.IntersectionObserverEntry.prototype
  );

  const paginatorRef = useRef();
  const [spin, setSpin] = useState(defaultSpin);
  useIntersectionObserver({
    onIntersect: ([{ isIntersecting }]) => {
      if (isIntersecting) {
        setSpin(true);
        loadMore(isIntersecting);
      } else if (spin) {
        setSpin(false);
      }
    },
    target: paginatorRef,
  });

  /**
   * If intersection observer is not present
   * allow function to be triggered manually
   */
  const manualTrigger = () => {
    loadMore(true);
  };

  return (
    <PaginatorWrapper ref={paginatorRef}>
      {observerExists ? (
        <Loader spin={spin} />
      ) : (
        <Button onClick={manualTrigger}>Load more</Button>
      )}
    </PaginatorWrapper>
  );
};

Paginator.propTypes = {
  loadMore: PropTypes.func,
  spin: PropTypes.bool,
};

export default Paginator;
