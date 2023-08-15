import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../../pages/HomePage/HomePage';
import AboutUsPage from '../../pages/AboutUsPage/AboutUsPage';

import MyAccount from '../../pages/HooksDemoPage/MyAccount/MyAccount';
import Blog from '../../pages/HooksDemoPage/Blog/Blog';

const PageNotFound = React.lazy(() =>
  import('../../pages/AboutUsPage/AboutUsPage')
);
const HooksDemoPage = React.lazy(() =>
  import('../../pages/HooksDemoPage/HooksDemoPage')
);
const ContactUsPage = React.lazy(() =>
  import('../../pages/ContactUsPage/ContactUsPage')
);
const HocDemoPage = React.lazy(() =>
  import('../../pages/HocDemoPage/HocDemoPage')
);
const UnitTestDemoPage = React.lazy(() =>
  import('../../pages/UnitTestDemoPage/UnitTestDemoPage')
);
const ShopPage = React.lazy(() => import('../../pages/ShopPage/ShopPage'));
const GalleryPage = React.lazy(() =>
  import('../../pages/GalleryPage/GalleryPage')
);

const AppRoutes = () => {
  return (
    // Let's config the routing here
    <Suspense fallback={<div className="spinner-border text-success"></div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hoc-demo" element={<HocDemoPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/hooks-demo">
          <Route index element={<HooksDemoPage />} />
          <Route path="my-account" element={<MyAccount />} />
          <Route path="blog" element={<Blog />} />
        </Route>
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/unit-test-demo" element={<UnitTestDemoPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
