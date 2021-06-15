import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Store from '../../../../../store/Store';
import {
  UserSection,
  ProfileImage,
  ProfileName,
  List,
  ListItem,
} from './loggedSection.style';

const LoggedSection = ({  }) => {
  const [showList, setShowList] = useState(false);
  const { openModal, user, idaSDK, setAuth, setUser } = useContext(Store);
  const { t } = useTranslation();
  const openActivistModal = () => {
    openModal('activist', { activist: user });
  };
  const logout = () => {
    idaSDK?.logout();
    setAuth(null);
    setUser(null);
  };

  return (
    <UserSection >
      <ProfileName onClick={() => setShowList(!showList)}>{user.name}</ProfileName>
      <ProfileImage onClick={() => setShowList(!showList)} src={user.profile_image?.single_size?.mimified} />
      <List show={showList}>
        <ListItem onClick={() => openActivistModal()}>
          {t('logged_section.profile')}
        </ListItem>
        <ListItem onClick={() => openModal('editActivist')}>
          {t('logged_section.edit_profile')}
        </ListItem>
        <ListItem>
          {t('logged_section.privacy_policy')}
        </ListItem>
        <ListItem>
          {t('logged_section.faq')}
        </ListItem>
        <ListItem onClick={logout}>
          {t('logged_section.logout')}
        </ListItem>
      </List>
    </UserSection>
  );
};

export default LoggedSection;