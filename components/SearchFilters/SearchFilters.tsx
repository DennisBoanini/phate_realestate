import * as React from 'react';
import { useState } from 'react';
import { Box, Flex, Select } from "@chakra-ui/react";
import { filterData, getFilterValues } from "../../utils/filterData";
import { FilterData } from "../../models/filter.model";
import { useRouter } from "next/router";

type Props = {};

export default function SearchFilters(props: Props) {
    const [filters, setFilters] = useState<FilterData[]>(filterData);
    const router = useRouter();

    const searchProperties = (filterValues: { [key: string]: string }) => {
        const path = router.pathname;
        const query = router.query;
        const values: { name: string; value: string; }[] = getFilterValues(filterValues);

        values.filter(item => item.value).forEach(item => query[item.name] = item.value);

        router.push({ pathname: path, query: query });
    }

    return (
        <Flex bg={'gray.100'} p={4} justifyContent={'center'} flexWrap={'wrap'}>
            {filters.map(filter => (
                <Box key={filter.queryName}>
                    <Select
                        placeholder={filter.placeholder}
                        onChange={e => searchProperties({[filter.queryName]: e.target.value})}
                        w={'fit-content'}
                        p={2}>
                        {filter?.items?.map(item => (
                            <option value={item.value} key={item.value}>
                                {item.name}
                            </option>
                        ))}
                    </Select>
                </Box>
            ))}
        </Flex>
    );
};