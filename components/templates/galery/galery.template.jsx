import React from 'react';
import PropTypes from 'prop-types'
import {
  Wrapper,
  Frame,
  Header,
  More,
  Title,
  ImagesContainer,
  Image,
  ImageText,
} from './galery.style';

/**
 * render the ActivistModal atom.
 */
const Galery = ({
  images,
  customStyle,
  lines,
  showTitle,
  title,
  columns,
  handleClick,
  circlePicture,
}) => (
  <Wrapper customStyle={customStyle}>
    <Header>
      <Title>{title}</Title>
      <More>Ver mais</More>
    </Header>
    <ImagesContainer columns={columns}>
      {
        images.slice(0, (columns * lines)).map((img) => (
          <Frame onClick={handleClick}>
            <Image circlePicture={circlePicture} src={img[200].mimified}/>
            {showTitle && <ImageText circlePicture={circlePicture}>{img.title}</ImageText>}
          </Frame>
        ))
      }
    </ImagesContainer>
  </Wrapper>
);

Galery.propTypes = {
  images: PropTypes.array.isRequired,
  customStyle: PropTypes.string,
  circlePicture: PropTypes.boolean,
};

Galery.defaultProps = {
  customStyle: '',
  lines: 2,
  circlePicture: true,
  columns: 3,
  images: [
    {
      200: {
        mimified: 'https://images.unsplash.com/photo-1568292342316-60aa3d36f4b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FscGFwZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
      },
      title: 'salve - manin - manolo'
    },
    {
      200: {
        mimified: 'https://images.unsplash.com/photo-1568292342316-60aa3d36f4b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FscGFwZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
      },
      title: 'salve - manin - manolo'
    },
    {
      200: {
        mimified: 'https://images.unsplash.com/photo-1568292342316-60aa3d36f4b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FscGFwZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
      },
      title: 'salve - manin - manolo'
    },
    {
      200: {
        mimified: 'https://images.unsplash.com/photo-1568292342316-60aa3d36f4b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FscGFwZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
      },
      title: 'salve - manin - manolo'
    },
    {
      200: {
        mimified: 'https://images.unsplash.com/photo-1568292342316-60aa3d36f4b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FscGFwZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
      },
      title: 'salve - manin - manolo'
    },
    {
      200: {
        mimified: 'https://images.unsplash.com/photo-1568292342316-60aa3d36f4b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FscGFwZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
      },
      title: 'salve - manin - manolo'
    },
    {
      200: {
        mimified: 'https://images.unsplash.com/photo-1568292342316-60aa3d36f4b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FscGFwZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
      },
      title: 'salve - manin - manolo'
    },
  ],
};

export default Galery;
