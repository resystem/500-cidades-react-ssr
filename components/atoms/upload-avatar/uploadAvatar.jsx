import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { PreLoaderImage, Uploader, Icon, Input } from './uploadAvatar.style';

/**
 * function that loading image before render
 * @void
 * @param {string} src image source to be loading
 */
function load(src, callback) {
  const image = new Image();

  image.onload = () => {
    callback(src);
  };

  image.src = src;
}

/**
 * function that render react component
 * @param {object} props component props
 * @returns contains UploadAvatar Component
 */
const UploadAvatar = ({ src, alt, title, handleChange, customStyle, id, type }) => {
  const [loaddedSrc, setLoaddedSrc] = useState(null);
  const [mimage, setmimage] = useState(src?.url);

  useEffect(() => {
    load(mimage, setLoaddedSrc);
  }, [mimage]);
  useEffect(() => {
    setmimage(src?.url);
  }, [src]);

  const onChange = ({ target }) => {
    const url = URL.createObjectURL(target.files[0]);
    setmimage(url);

    handleChange('profileImage',{
      file: target.files[0],
      url,
    });
  };

  const emptyImage = <Icon src="/icons/plus_gray.svg" />;
  const image = (
    <PreLoaderImage type={type} src={loaddedSrc} alt={alt} title={title} customStyle={customStyle} />
  );

  return (
    <Fragment>
      <Uploader type={type} customStyle={customStyle} onChange={onChange} htmlFor={id}>
        {loaddedSrc ? image : emptyImage}
      </Uploader>
      <Input accept="image/png, image/jpeg" id={id} onChange={onChange} type="file" />
    </Fragment>
  );
}

UploadAvatar.propTypes = {
  id: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  src: PropTypes.string,
  type: PropTypes.string,
  customStyle: PropTypes.string,
  handleChange: PropTypes.func.isRequired
};

UploadAvatar.defaultProps = {
  id: 'uploader-avatar-artist-form-input',
  alt: '',
  title: '',
  type: '',
  src: '',
  customStyle: ''
};

export default UploadAvatar;
