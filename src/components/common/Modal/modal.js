import React from 'react';
import Modal from 'react-modal';
import { PropTypes as PT } from 'prop-types';
import container from './container';

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');

const ReactModalAdapter = ({ className, isOpen, title, bodyText, children }) => {
  const contentClassName = `${className}__content`;
  const overlayClassName = `${className}__overlay`;

  return (
    <Modal
      isOpen={isOpen}
      portalClassName={className}
      className={contentClassName}
      overlayClassName={overlayClassName}
    >
      <h1>{title}</h1>
      {bodyText}
      {children}
    </Modal>
  );
};

ReactModalAdapter.propTypes = {
  isOpen: PT.bool.isRequired,
  title: PT.string.isRequired,
  bodyText: PT.string.isRequired,
  children: PT.oneOfType([PT.array, PT.object]).isRequired,
  className: PT.string.isRequired,
};

export default container(ReactModalAdapter);