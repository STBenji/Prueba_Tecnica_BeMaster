import ContentLoader from 'react-content-loader'

export const Skeleton = () => (
  <ContentLoader viewBox="0 0 400 500" className="absolute top-0 left-0 w-full border rounded-lg">
    <rect x="0" y="0" rx="2" ry="2" width={'1000'} height={'1000'} />
  </ContentLoader>
)
