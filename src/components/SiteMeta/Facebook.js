import React from 'react'
import Helmet from 'react-helmet'

export default ({
    pageUrl = null,
    type = null,
    title = null,
    description = null,
    facebookImage = null,
    appID = null
}) => (
    <Helmet>
        {pageUrl && <meta property="og:url" content={pageUrl} />}
        {type && <meta property="og:type" content={type} />}
        {title && <meta property="og:title" content={title} />}
        {description && (
            <meta property="og:description" content={description} />
        )}
        {facebookImage && <meta property="og:image" content={facebookImage} />}
        {appID && <meta property="fb:app_id" content={appID} />}
    </Helmet>
)
