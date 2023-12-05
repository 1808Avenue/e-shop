import { Button, Result } from 'antd';

import styles from './Error.module.scss';

export const Error = () => {
  const handlerReload = () => {
    location.reload();
  };

  return (
    <Result
      className={styles.error}
      status="error"
      title="Submission Failed"
      subTitle="Please reload the page"
      extra={[<Button onClick={handlerReload}>Reload</Button>]}
    ></Result>
  );
};
