import React, {FC, useMemo, useState} from "react";


import { CloseIcon } from "src/assets/icons";
import Input from "src/components/Input";
import Button from "src/components/Button";
import TabsList from "src/components/TabsList";

import { ButtonTypes } from "src/components/Button/Button";
import {TabsTypes} from "src/@types";

import styles from "./Filters.module.scss";
import Title from "src/components/Title";

type FiltersType = {
  onClick: () => void;
  onSubmit: () => void;
};

const Filters: FC<FiltersType> = (onClick, onSubmit) => {

  const [activeTab, setActiveTab] = useState(TabsTypes.Year);
  const tabsList = useMemo(
    () => [
      { key: TabsTypes.Rating, title: "Rating"},
      { key: TabsTypes.Year, title: "Year"},
    ],
    []
  );
  const onTabClick = (tab: TabsTypes) => () => {
    setActiveTab(tab);
  };

  return  (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <Title title={"Filters"}/>
        <CloseIcon/>
      </div>

      <div>
        <div className={styles.filtersTitle}>Sort by</div>
       <TabsList tabsList={tabsList} activeTab={activeTab} onTabClick={onTabClick}/>
      </div>

      <Input title={"Full or short movie name"} placeholder={"Your text"} onChange={() =>{}} value={''}/>

      <div>
        <div className={styles.filtersTitle}>Genre</div>
        <div className={styles.genreContainer}></div>
      </div>

      <div>
        <Input title={"Years"} placeholder={"From"} onChange={() =>{}} value={''}/>
        <Input placeholder={"To"} onChange={() =>{}} value={''}/>
      </div>


      <div>
        <Input title={"Rating"} placeholder={"From"} onChange={() =>{}} value={''}/>
        <Input placeholder={"To"} onChange={() =>{}} value={''}/>
      </div>

      <Input title={"Country"} placeholder={"Select country"} onChange={() =>{}} value={''}/>

      <div className={styles.buttonContainer}>
        <Button type={ButtonTypes.Secondary} title={"Clear filter"} onClick={() =>{}}></Button>
        <Button type={ButtonTypes.Primary} title={'Show results'} onClick={() =>{}}></Button>
      </div>
    </div>
  )
};

export default Filters;