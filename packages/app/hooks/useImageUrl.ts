import { useContext } from 'react'

import ImageKitContext from 'app/provider/ImageKit'

function useImageUrl(options: Transformation) {
  const { enabled = false, path, ...restOptions } = options

  const { imageKit } = useContext(ImageKitContext)

  const imageUrl = enabled && imageKit ? imageKit.url({
    path,
    ...restOptions,
  }) : null

  return {
    imageUrl,
  }
}

export default useImageUrl
