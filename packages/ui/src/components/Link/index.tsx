import { Anchor, styled } from 'tamagui'

export const Link = styled(Anchor, {
  name: 'Link',
  color: '$color',
  fontSize: 14,
  lineHeight: 21,
  textDecorationLine: 'none',

  variants: {
    color: {
      black: {
        color: '$black1',
      },
    },
  } as const,
})
