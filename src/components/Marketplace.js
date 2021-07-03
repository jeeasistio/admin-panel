import React from 'react'
import { Box } from '@material-ui/core'
import MarketplaceNav from './MarketplaceNav'
import Layout from './Layout'
import MarketplaceSidebar from './MarketplaceSidebar'
import MarketplaceContent from './MarketplaceContent'

const Marketplace = () => {
  return (
    <Layout>
      <MarketplaceNav />
      <Box display="flex">
        <MarketplaceSidebar />
        <MarketplaceContent />
      </Box>
    </Layout>
  )
}

export default Marketplace
