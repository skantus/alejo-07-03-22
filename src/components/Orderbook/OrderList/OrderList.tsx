import OrderItem from '../OrderItem';
import styles from './styles';
import React, { ReactElement, ReactNode, useCallback } from 'react';
import { FlatList, View } from 'react-native';
import { FeedsType } from 'src/api';
import { OrderItemType, OrderType } from 'src/components/types';

type Props = {
  type: OrderType;
  header: ReactNode;
  list?: FeedsType;
};

const keyExtractor = (_: unknown, index: number) => `item-${index}`;

const OrderList = ({ type, header, list }: Props): ReactElement => {
  const renderItem = useCallback(
    ({ item, index }: OrderItemType) => (
      <OrderItem index={index} item={item} type={type} />
    ),
    [type],
  );

  return (
    <View style={styles.container} testID="orderList">
      {header}
      <FlatList
        alwaysBounceHorizontal={false}
        contentInsetAdjustmentBehavior="always"
        data={list}
        inverted={type === OrderType.Ask}
        keyExtractor={keyExtractor}
        persistentScrollbar={true}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={styles.container}
        testID="flatList"
      />
    </View>
  );
};

export default OrderList;