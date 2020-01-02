import React from 'react';
import { PropTypes as PT } from 'prop-types';

const ModalContainer = Wrapped =>
  class extends React.Component {
    static propTypes = {
      isOpen: PT.bool.isRequired,
      title: PT.string.isRequired,
      bodyText: PT.string.isRequired,
      children: PT.objectOf(PT.symbol).isRequired,
      className: PT.string.isRequired,
    };

    render() {
      const { isOpen, title, bodyText, children, className } = this.props;

      return (
        <Wrapped isOpen={isOpen} title={title} bodyText={bodyText} className={className}>
          {children}
        </Wrapped>
      );
    }
  };

export default ModalContainer;
