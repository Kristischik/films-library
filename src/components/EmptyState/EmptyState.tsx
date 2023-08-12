import React, { FC } from "react";

import styles from "./EmptyState.module.scss";
import {EmptyIcon} from "src/assets/icons";

type EmptyStatePropsType = {
  title: string;
  description: string;
};
const EmptyState: FC<EmptyStatePropsType> = ({ title, description }) => {
  return (
    <div className={styles.container}>
      <EmptyIcon />
      <div className={styles.infoContainer}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};

export default EmptyState;