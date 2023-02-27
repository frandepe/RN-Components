import React, {useContext} from 'react';
import {View, SectionList, Text} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {ItemSeparator} from '../components/ItemSeparator';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {styles} from '../theme/appTheme';

//* Lo ponemos afuera porque no queiro que se vuelva a construir
//* o a ocupar un espacio en memoria

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: 'DC Comics',
    data: [
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
    ],
  },
  {
    casa: 'Marvel Comics',
    data: [
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
    ],
  },
  {
    casa: 'Anime',
    data: [
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
    ],
  },
];

export const CustomSectionList = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={{...styles.globalMargin, flex: 1}}>
      <SectionList
        sections={casas}
        stickySectionHeadersEnabled
        ListHeaderComponent={() => <HeaderTitle title="Section List" />}
        renderItem={({item}) => (
          <Text style={{color: colors.text}}>{item}</Text>
        )}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({section}) => (
          <View style={{backgroundColor: colors.background}}>
            <HeaderTitle title={section.casa} />
          </View>
        )}
        ListFooterComponent={() => (
          <View style={{marginBottom: 70}}>
            <HeaderTitle title={'Total de casa ' + casas.length} />
          </View>
        )}
        renderSectionFooter={({section}) => (
          <HeaderTitle title={'Total de elementos: ' + section.data.length} />
        )}
        // SectionSeparatorComponent={() => <ItemSeparator />}
        ItemSeparatorComponent={() => <ItemSeparator />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

//?https://reactnative.dev/docs/sectionlist
