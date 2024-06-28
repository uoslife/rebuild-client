import React, {useState} from 'react';
import styled from '@emotion/native';
import FilterButton from './FilterButton';
import {ScheduleStatusType} from '../constants';

const STATUSES = ['ALL', 'NOTIFICATION', 'IN_PROGRESS', 'ON_FILTER'] as const;

const FilterButtonGroup = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');

  const handleFilterPress = (filterName: string) => {
    setSelectedFilter(filterName);
  };
  return (
    <S.Container>
      {STATUSES.map(status => (
        <FilterButton
          key={status}
          text={status}
          onPress={() => handleFilterPress(status)}
          isSelected={selectedFilter === status}
        />
      ))}
    </S.Container>
  );
};

export default FilterButtonGroup;

const S = {
  Container: styled.View`
    align-items: flex-start;
    flex-direction: row;
    gap: 12px;
  `,
};
