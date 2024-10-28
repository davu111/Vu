import React from "react";
import {
    Page,
    Text,
    Image,
    Button,
} from "zmp-ui";

const Test2 = () => {
    return (
        <Page>
            <Navbar title="Test Page" />

            <ScrollView>
                <Block style={{ padding: 20 }}>
                    <Row>
                        <Text>{'9:41'}</Text>
                        <Image
                            src="https://i.imgur.com/1tMFzp8.png"
                            style={{ width: 24, height: 24 }}
                        />
                        <Image
                            src="https://i.imgur.com/1tMFzp8.png"
                            style={{ width: 24, height: 24 }}
                        />
                        <Block style={{ flex: 1 }} />
                        <Block style={{ width: 40, height: 40, backgroundColor: 'gray' }} />
                    </Row>

                    <Block style={{ marginTop: 20 }}>
                        <Row>
                            <Image
                                src="https://i.imgur.com/1tMFzp8.png"
                                style={{ width: 24, height: 24 }}
                            />
                            <Text>{'Shelf Life'}</Text>
                            <Text>{'Shopping Cart'}</Text>
                            <Row>
                                <Image
                                    src="https://i.imgur.com/1tMFzp8.png"
                                    style={{ width: 24, height: 24 }}
                                />
                                <Block style={{ width: 40, height: 40, backgroundColor: 'gray' }} />
                                <Image
                                    src="https://i.imgur.com/1tMFzp8.png"
                                    style={{ width: 24, height: 24 }}
                                />
                            </Row>
                        </Row>
                    </Block>
                </Block>

                <Block>
                    <Row>
                        <Block style={{ width: 40, height: 40, backgroundColor: 'gray' }} />
                        <Text>{'Items'}</Text>
                        <Block style={{ width: 40, height: 40, backgroundColor: 'gray' }} />
                        <Image
                            src="https://i.imgur.com/1tMFzp8.png"
                            style={{ width: 24, height: 24 }}
                        />
                        <Text>{'Edit'}</Text>
                    </Row>
                </Block>

                <Block>
                    {[...Array(4)].map((_, index) => (
                        <Row key={index} style={{ marginVertical: 10 }}>
                            <Block style={{ width: 40, height: 40, backgroundColor: 'gray' }} />
                            <Image
                                src="https://i.imgur.com/1tMFzp8.png"
                                style={{ width: 24, height: 24 }}
                            />
                            <Block>
                                <Text>{'The light beyond The Garden wall - Scott Wh...'}</Text>
                                <Text>{'$20.0'}</Text>
                                <Row>
                                    <Image
                                        src="https://i.imgur.com/1tMFzp8.png"
                                        style={{ width: 24, height: 24 }}
                                    />
                                    <Block style={{ width: 40, height: 40, backgroundColor: 'gray' }} />
                                    <Text>{'1'}</Text>
                                </Row>
                            </Block>
                        </Row>
                    ))}
                </Block>

                <Block>
                    <Row>
                        <Text>{'Total'}</Text>
                        <Text>{'(24)'}</Text>
                        <Text>{'$200.00'}</Text>
                        <Button>{'Buy now'}</Button>
                    </Row>
                </Block>
            </ScrollView>
        </Page>
    );
};

export default Test2;
