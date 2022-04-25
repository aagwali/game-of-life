import styled, { css } from "styled-components"

import { Box, Center, GridItem, Text, theme } from "@chakra-ui/react"

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
export const CellItem = styled(GridItem)`
  width: ${theme.space[5]};
  height: ${theme.space[5]};
  border-width: ${theme.sizes["0.5"]};
  border-color: ${theme.colors.blue[300]};
  border-radius: ${theme.sizes["1"]};
  ${({ status }) =>
    css`
      background: ${status ? theme.colors.green[300] : theme.colors.white};
    `};
`
