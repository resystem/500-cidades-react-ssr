import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TagListComponent, TagsList, Tag, TagRemove, TagsInput, TagInput } from './taglist.style';

const TagList = ({
  tags, showRemoveButton, customStyle
}) => {

  return (
    <TagListComponent customStyle={customStyle}>
      <TagsList>
        { tags.map((tag, i) => (
            <Tag key={tag}>
              {tag}
              {showRemoveButton && <TagRemove type="button" onClick={() => { removeTag(i); }}>+</TagRemove>}
            </Tag>
          ))}
      </TagsList>
    </TagListComponent>
)};

TagList.propTypes = {
  customStyle: PropTypes.string,
  showRemoveButton: PropTypes.bool,
  tags: PropTypes.arrayOf(PropTypes.string),
};

TagList.defaultProps = {
  customStyle: '',
  tags: ['fala', 'outra tag', 'vai mandar', 'WIIIIIIIIII', 'vai mandar, vai mandar', 'WIIIIIIIIIII']
};

export default TagList;
