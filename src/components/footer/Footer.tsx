import React from 'react';
import { FooterContainer, FooterColumn, FooterLink, Text } from './Footer.s';

const Footer = () => (
    <FooterContainer>
        <FooterColumn>
            <Text variant="h6">Discover</Text>
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/categories">Categories</FooterLink>
            <FooterLink href="/faq">FAQ</FooterLink>
        </FooterColumn>
        <FooterColumn>
            <Text variant="h6">Social</Text>
            <FooterLink href="/telegram">Telegram</FooterLink>
            <FooterLink href="/news">News</FooterLink>
        </FooterColumn>
        <FooterColumn>
            <Text variant="h6">Legal</Text>
            <FooterLink href="/disclaimer">Disclaimer</FooterLink>
            <FooterLink href="/terms">Terms</FooterLink>
            <FooterLink href="/privacy">Privacy</FooterLink>
        </FooterColumn>
    </FooterContainer>
);

export default Footer;
