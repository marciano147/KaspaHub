import { FC } from 'react';
import { CardContainer, LogoTitleContainer, Logo, Title, Description, LearnMoreLink } from './ItemCard.s';

interface ItemCardComponentProps {
    logo: string;
    title: string;
    description: string;
    link: string;
}

export const ItemCardComponent: FC<ItemCardComponentProps> = (props) => {
    const { logo, title, description, link } = props;

    return (
        <CardContainer>
            <LogoTitleContainer>
                <Logo src={logo} alt={title} variant="square" />
                <Title>{title}</Title>
            </LogoTitleContainer>
            <Description>{description}</Description>
            <LearnMoreLink href={link} target="_blank" rel="noopener noreferrer">
                Learn More
            </LearnMoreLink>
        </CardContainer>
    );
};
