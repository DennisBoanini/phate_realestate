import type { NextPage } from 'next'
import { Box, Flex } from "@chakra-ui/react";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import { Hit, Property } from "../models/property.model";
import React from "react";
import { Banner } from "../components/Banner/Banner";
import { PropertyHit } from "../components/Property/PropertyHit"

type Props = {
    propertyForSale: Hit[];
    propertyForRent: Hit[];
}

const Home: NextPage<Props> = (props: Props) => {
    return (
        <Box>
            <Banner
                purpose={'RENT A HOME'}
                title1={'Rental Homes for'}
                title2={'Everyone'}
                desc1={'Explore Apartments, Villas, Homes'}
                desc2={'and more'}
                buttonText={'Explore Renting'}
                linkName={'/search?purpose=for-rent'}
                imageUrl={'https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'}/>

            <Flex flexWrap={'wrap'}>
                {props.propertyForRent.map(property => <PropertyHit key={property.id} property={property}/>)}
            </Flex>

            <Banner
                purpose={'BUT A HOME'}
                title1={'Find, Buy & Own Your'}
                title2={'Dream Home'}
                desc1={'Explore Apartments, Villas, Homes'}
                desc2={'and more'}
                buttonText={'Explore Buying'}
                linkName={'/search?purpose=for-sale'}
                imageUrl={'https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'}/>

            <Flex flexWrap={'wrap'}>
                {props.propertyForSale.map(property => <PropertyHit key={property.id} property={property}/>)}
            </Flex>
        </Box>
    )
}

export default Home

export async function getStaticProps() {
    const propertyForSale: Property = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
    const propertyForRent: Property = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

    return {
        props: {
            propertyForSale: propertyForSale?.hits,
            propertyForRent: propertyForRent?.hits,
        }
    }
}