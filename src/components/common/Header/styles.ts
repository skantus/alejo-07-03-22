import { StyleSheet } from 'react-native';
import { Theme } from 'src/theme';

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      borderBottomColor: theme.$ternary,
      borderBottomWidth: 1,
      flexDirection: 'row',
      height: 40,
      justifyContent: 'space-between',
      paddingHorizontal: 20,
    },
    text: {
      color: theme.$defaultText,
      fontSize: 12,
    },
    title: {
      color: theme.$defaultText,
      fontSize: 16,
      fontWeight: '700',
    },
  });

export default styles;
