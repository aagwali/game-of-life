import styled from "styled-components"

import { Box, Center, Text, theme } from "@chakra-ui/react"

export const AppCanvas = styled(Box)`
  min-height: 100vh;
  min-width: 100vw;
`
export const HeaderCanvas = styled(Center)`
  height: ${theme.space[28]};
`

export const HeaderTitle = styled(Text)`
  font-size: ${theme.fontSizes["4xl"]};
  color: ${theme.colors.blue[500]};
`
