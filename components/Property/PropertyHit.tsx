import * as React from 'react';
import { Hit } from "../../models/property.model";
import Link from "next/link";
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import defaultImage from '../../assets/images/house.png';
import millify from "millify";
import { FaBath, FaBed } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";

type Props = {
    property: Hit;
};

export function PropertyHit(props: Props) {
    return (
        <Link href={`/property/${props.property.externalID}`} passHref>
            <Flex flexWrap={'wrap'} w={'420px'} p={5} paddingTop={0} justifyContent={'flex-start'} cursor={'pointer'}>
                <Box>
                    <Image src={props.property.coverPhoto ? props.property.coverPhoto.url : defaultImage} width={400}
                           height={260} alt={'house-image'}/>
                </Box>
                <Box w={'full'}>
                    <Flex paddingTop={2} alignItems={'center'} justifyContent={'space-between'}>
                        <Flex alignItems={'center'}>
                            <Box paddingRight={3} color={'green.400'}>
                                {props.property.isVerified && <GoVerified />}
                            </Box>
                            <Text fontWeight={'bold'} fontSize={'lg'}>
                                AED {millify(props.property.price)}{props.property.rentFrequency && `/${props.property.rentFrequency}`}
                            </Text>
                        </Flex>
                        <Box>
                            <Avatar size={'sm'} src={props.property.agency.logo.url} />
                        </Box>
                    </Flex>
                    <Flex alignItems={'center'} p={1} justifyContent={'space-between'} w={'250px'} color={'blue.400'}>
                        {props.property.rooms} <FaBed /> | {props.property.baths} <FaBath /> | {millify(props.property.area)} sqft <BsGridFill />
                    </Flex>
                    <Text fontSize={'lg'}>
                        {props.property.title.length > 30 ? `${props.property.title.substring(0, 30)}...` : props.property.title}
                    </Text>
                </Box>
            </Flex>
        </Link>
    );
}