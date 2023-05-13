import styled from 'styled-components/macro'

export const PlanetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Image = styled.img`
  width: 250px;
  height: 250px;
  @media screen and (min-width: 768px) {
    width: 405px;
    height: 292px;
  }
`

export const Name = styled.h1`
  font-size: 20px;
  font-family: 'Roboto';
  color: #f8fafc;
  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-top: 48px;
  }
`

export const Description = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  color: #f1f5f9;
  max-width: 808px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 40px;
  }
`
