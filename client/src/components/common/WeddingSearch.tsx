import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

interface WeddingSearchProps {
  mode: string;
  search: string;
  divide: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeDivide: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onSearch: (e: React.FormEvent<HTMLFormElement>) => void;
}

const WeddingSearch: React.FC<WeddingSearchProps> = ({
  mode,
  search,
  divide,
  onChange,
  onChangeDivide,
  onSearch,
}) => {
  return (
    <SearchBlock>
      <form onSubmit={onSearch}>
        <select value={divide} onChange={onChangeDivide}>
          <option value="husband">신 랑</option>
          <option value="bride">신 부</option>
        </select>
        <input
          type="text"
          name="search"
          value={search}
          onChange={onChange}
          placeholder={`${mode} 검색`}
        />
        <button type="submit">검색</button>
      </form>
    </SearchBlock>
  );
};

export default WeddingSearch;

const SearchBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  form {
    width: 320px;
    padding: 5px;
    background: #444;
    background: rgba(103, 153, 255, 0.12);
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4) inset,
      0 1px 0 rgba(255, 255, 255, 0.2);
    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4) inset,
      0 1px 0 rgba(255, 255, 255, 0.2);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4) inset,
      0 1px 0 rgba(255, 255, 255, 0.2);
  }
  select {
    width: 100px;
    height: 40px;
    float: left;
    border-radius: 3px;
  }
  input {
    width: 150px;
    height: 40px;
    padding: 10px 5px;
    float: 1;
    font-size: 1rem;
    border: 0;
    background: #a0baed;
    color: white;
    -moz-border-radius: 3px 0 0 3px;
    -webkit-border-radius: 3px 0 0 3px;
    border-radius: 3px 0 0 3px;
    &::placeholder {
      color: white;
    }
    &:focus {
      color: ${oc.violet[9]};
      outline: 0;
      background: ${oc.gray[0]};
      -moz-box-shadow: 0 0 2px rgba(0, 0, 0, 0.8) inset;
      -webkit-box-shadow: 0 0 2px rgba(0, 0, 0, 0.8) inset;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.8) inset;
    }
  }
  button {
    overflow: visible;
    position: relative;
    float: right;
    border: 0;
    padding: 0;
    cursor: pointer;
    width: 60px;
    height: 40px;
    color: ${oc.gray[0]};
    font-size: 1rem;
    background: ${oc.indigo[7]};
    -webkit-border-radius: 0 3px 3px 0;
    -moz-border-radius: 0 3px 3px 0;
    border-radius: 0 3px 3px 0;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.3);
    &:-moz-focus-inner {
      border: 0;
      padding: 0;
    }
    &:hover {
      background: ${oc.indigo[5]};
      &:before {
        border-right-color: ${oc.indigo[5]};
      }
    }
    &:active,
    &:focus {
      background: ${oc.indigo[8]};
      transform: translateX(-4px);
      &:before {
        border-right-color: ${oc.indigo[8]};
      }
    }
    &:before {
      content: '';
      position: absolute;
      border-width: 8px 8px 8px 0;
      border-style: solid solid solid none;
      border-color: transparent ${oc.indigo[7]} transparent;
      top: 12px;
      left: -6px;
    }
  }
`;
