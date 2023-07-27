import { t } from 'i18next';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss'

interface NavbarProps {
 className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
  const {t} = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);
 return (
 <div className={classNames(cls.Navbar, {}, [className])}>
  <Button 
    theme={ButtonTheme.CLEAR_INVERTED} 
    className={cls.links}
    onClick={onToggleModal}
  >
      {t('Войти')}
  </Button>
  <Modal isOpen={isAuthModal} onClose={onToggleModal}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt voluptatum ipsa ullam maxime quia dolores et cupiditate. Facilis ducimus, consectetur eius, cum odio odit beatae voluptate tempore iusto iste, repudiandae vitae officiis vel molestiae veritatis. Temporibus ipsa, totam blanditiis necessitatibus sequi laboriosam praesentium vitae doloribus unde doloremque iste pariatur, fugit odit ratione eos mollitia molestiae nemo porro facere harum delectus, ab ut. Eveniet pariatur consequuntur, quibusdam, sapiente cum vitae maiores dolor repudiandae modi rerum, odio corrupti accusamus quis obcaecati voluptatibus omnis ratione magni facilis ab ipsum eligendi soluta blanditiis similique? Sit natus aut alias consequuntur, tempore a necessitatibus omnis quibusdam.
  </Modal>
 </div>
 );
};