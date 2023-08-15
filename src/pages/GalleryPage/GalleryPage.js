import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import GalleryVideo from './GalleryVideo/GalleryVideo';

const GalleryPage = () => {
  const [galleryVideos, setGalleryVideos] = useState([])
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/photos?_limit=10')
      .then((res) => {
        // if api call is successful we will get response
        // console.log(res.data);
        setGalleryVideos(res.data);
      })
      .catch((err) => {
        // if error
        console.log(err);
      })
      .finally(() => {
        console.log('it is over!');
      });
  }, []);

  // galleryVideos?.forEach((element) => {
  //   element.isLiked = false;
  // });

  const isArrayEmpty = () => {
    if (!Array.isArray(galleryVideos) || galleryVideos?.length === 0) {
      return <div className="alert alert-danger">No Videos found</div>;
    }
  };
  return (
    <>
      <Helmet>
        <title>Prime Video | Video Gallery</title>
      </Helmet>
      <>
        <h1>GalleryPage</h1>
        {isArrayEmpty()}
        <div className="video-cards">
          {galleryVideos?.map((video) => {
            return <GalleryVideo key={video.id} {...video} />;
          })}
        </div>
      </>
    </>
  );
};

export default GalleryPage;
