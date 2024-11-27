import Button from '../Button';
import Card from '../Card';
import Text from '../Text';
import styles from './styles.module.css';

const WalletCard = () => {
  return (
    <Card className={styles.container}>
      {/* 卡片头部 */}
      <div className={styles.header}>
        <div className={styles.infoWrapper}>
          <div className={styles.avatar}>
            <Text variant="primary" className="font-bold">W</Text>
          </div>
          <div>
            <Text variant="primary" className="font-bold">我的多签钱包</Text>
            <Text variant="secondary" size="sm">3/5 确认</Text>
          </div>
        </div>
        <Button variant="primary">连接</Button>
      </div>
      
      {/* 余额展示 */}
      <Card variant="secondary" className={styles.balanceCard}>
        <div className={styles.balanceGrid}>
          <div>
            <Text variant="secondary" size="sm">总余额</Text>
            <Text variant="primary" size="xl" className="font-bold">1.234 ETH</Text>
          </div>
          <div className="text-right">
            <Text variant="secondary" size="sm">待确认</Text>
            <Text variant="warning" size="xl" className="font-bold">2</Text>
          </div>
        </div>
      </Card>
      
      {/* 操作按钮 */}
      <div className={styles.actionButtons}>
        <Button variant="success">发送</Button>
        <Button variant="primary">接收</Button>
      </div>
    </Card>
  );
};

export default WalletCard;