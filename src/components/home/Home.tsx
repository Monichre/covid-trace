import React, { Fragment, useEffect } from 'react'
import HeadSection from './HeadSection'
import FeatureSection from './FeatureSection'
import PricingSection from './PricingSection'
import SupportedVenues from './SupportedVenues'
function Home() {
  // const { selectHome } = props;
  // useEffect(() => {
  //   selectHome();
  // }, [selectHome]);
  return (
    <Fragment>
      <HeadSection />
      <FeatureSection />
      <SupportedVenues />
      <PricingSection />
    </Fragment>
  )
}
export default Home
