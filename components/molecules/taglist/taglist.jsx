import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TagListComponent, TagsList, Tag, TagRemove, TagsInput, TagInput } from './taglist.style';

const TagList = ({
  handleChange, customStyle,
  disabled, onFocus, onBlur,
  placeholder, success, error,
  filled
}) => {
  const [tags, setTags] = useState([]);

  const removeTag = (i) => {
    const newTags = [ ...tags ];
    newTags.splice(i, 1);
    setTags(newTags)
  };

  const inputKeyDown = (e) => {
    const val = e.target.value;
    if (e.key === 'Enter' && val) {
      if (tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
        return;
      }
      setTags([...tags, val]);
      tagInput.value = null;
    } else if (e.key === 'Backspace' && !val) {
      removeTag(tags.length - 1);
    }
  }

  let tagInput = null;

  return (
    <TagListComponent>
      <TagsList>
      { tags.map((tag, i) => (
            <Tag key={tag}>
              {tag}
              <TagRemove type="button" onClick={() => { removeTag(i); }}>+</TagRemove>
            </Tag>
          ))}
        <TagsInput className="input-tag__tags__input"><TagInput type="text" onKeyDown={inputKeyDown} ref={c => { tagInput = c; }} /></TagsInput>
      </TagsList>
    </TagListComponent>
)};

TagList.propTypes = {
  handleChange: PropTypes.func.isRequired,
  customStyle: PropTypes.string,
  disabled: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  success: PropTypes.bool,
  error: PropTypes.bool,
  placeholder: PropTypes.string,
  filled: PropTypes.bool,
};

TagList.defaultProps = {
  customStyle: '',
  disabled: false,
  onFocus: () => '',
  onBlur: () => '',
};

export default TagList;
