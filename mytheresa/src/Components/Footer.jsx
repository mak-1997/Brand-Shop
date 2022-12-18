import {Grid,Box,Image,GridItem, Input, Button,Text,Center,Divider} from '@chakra-ui/react';

export const Footer = () =>{

    return(<Box>
        <Box>
        <Text>SHOP WHENEVER, WHEREVER WITH THE APP</Text>
        <Center display={'flex'}>
            <Image maxW={'190px'} src='google-logo.svg ' alt='Play Store'  />
            <Image maxW={'150px'} src='apple-logo.svg' alt='Apple Store'  />
        </Center>
        </Box>
        <Divider borderColor='gray.300' maxW='90%' margin='auto' />
        <Grid templateColumns={'repeat(4,1fr)'} maxW='90%' margin='auto' marginTop='5' textAlign={'start'} gap='5' >
            <GridItem  >
                <Text marginBottom={'3'} >SERVICE & SECURITY</Text>
                <Text>Fast Delivery</Text>
                <Text marginBottom={'2'} color={'gray.500'} >Delivery within 2 business days</Text>
                <Text>Free returns within 30 days</Text>
                <Text marginBottom={'2'} color={'gray.500'} >Convenient return service</Text>
                <Text>Secure payment and data protection</Text>
                <Text color={'gray.500'} >SSL encryption for secure transactions and personal data</Text>
            </GridItem>
            <GridItem>
                <Text marginBottom={'3'}>BRAND SHOP</Text>
                <Text>About us</Text>
                <Text>Trust & services</Text>
                <Text>sustainability</Text>
                <Text>Press</Text>
                <Text>Careers</Text>
                <Text>Investor Relations</Text>
                <Text>Affiliates</Text>
                <Text>Tax-free Shopping</Text>
            </GridItem>
            <GridItem marginBottom={'3'}>
                <Text>CUSTOMER CARE</Text>
                <Text>Contavt us</Text>
                <Text>Shipping information</Text>
                <Text>Secure payment</Text>
                <Text>Exchanges</Text>
                <Text>Returns</Text>
                <Text>After sale service</Text>
                <Text>Gift card</Text>
            </GridItem>
            <GridItem>
                <Text marginBottom={'3'}>GET TREND UPDATES, STYLE TIPS AND MORE</Text>
                <Input marginTop='3' placeholder='your email address here...' />
                <Button marginTop='3' marginBottom={'3'}>SIGN UP</Button>
                <Text>Wish list</Text>
                <Text>Recieve personal notifications</Text>
            </GridItem>
        </Grid>

    </Box>)
}