import UiModal, { ModalProps } from "@material-ui/core/Modal";
import { FC } from "react";
import styles from "./Modal.module.scss";

export const Modal: FC<ModalProps> = ({ children, ...overProps }) => {
  return (
    <UiModal {...overProps}>
      <div className={styles.container}>{children}</div>
    </UiModal>
  );
};
