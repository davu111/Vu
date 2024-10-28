import {Page, Button, Box} from 'zmp-ui';

const Simple = () => {
  return (
    
    <Page
    style={{ padding: '20px', backgroundColor: '#FFFFFF', height: '10000px' }}
    resetScroll={true}
    hideScrollbar={true}
    restoreScroll={true}
    restoreScrollOnBack={true}
    name="home-page"
  >
    <h1>Welcome to My Page</h1>
    <p>This is a demonstration of all the properties of the Page component in zmp-ui.</p>

    <Button
        className="my-custom-button"
        style={{
          padding: '10px 20px',
          backgroundColor: '#50A65C',
          color: '#000000', // Đặt màu chữ của nội dung nút
          fontFamily: 'Montserrat, sans-serif', // Sử dụng font Montserrat
          fontSize: '18px',
          lineHeight: '24px',
          fontWeight: 'bold',
        }}
        variant="primary"
        loading={false}
        disabled={false}
        type="highlight"
        htmlType="button"
        size="medium"
        fullWidth={false}
        icon={null}
        onClick={() => alert('Button clicked!')}
      >
        <div>Buy now</div>
      </Button>

      <Box
      id="bottom-box"
      className="my-custom-box"
      style={{ 
        position: 'fixed', // Đặt Box cố định
        bottom: 0, // Đặt Box ở vị trí dưới cùng
        left: 0,
        right: 0, // Đảm bảo Box chiếm toàn bộ chiều rộng của thiết bị
        backgroundColor: '#F1F3E6', // Màu nền mới
        borderTopLeftRadius: '32px', // Bo góc trên trái
        borderTopRightRadius: '32px', // Bo góc trên phải
        height: '174px', // Chiều cao của Box
        width: '393px', // Chiều rộng của Box
      }}
      /*noSpace={false}
      inline={false}
      verticalAlign="middle"
      textAlign="center"
      flex={true}
      flexDirection="column"
      flexWrap={true}
      justifyContent="center"
      alignItems="center"
      alignContent="center"*/
    >
      <Box
      id="section-box1"
      className="my-custom-box"
      style={{ 
        position: 'fixed', // Đặt Box cố định
        bottom: 0, // Đặt Box ở vị trí dưới cùng
        left: 0,
        right: 0, // Đảm bảo Box chiếm toàn bộ chiều rộng của thiết bị
        backgroundColor: '#FF003C', // Màu nền mới
        border: '1px solid #ccc',
        height: '100px', // Chiều cao của Box
        width: '393px', // Chiều rộng của Box
      }}
    >
     <Button
        className="home-page-button"
        style={{
          //padding: '10px 20px',
          padding: 0,
          //lineHeight: '48px', // Điều chỉnh line-height bằng với chiều cao để căn giữa nội dung
          borderRadius: '32px', // Đảm bảo Button là hình chữ nhật góc vuông
          minwidth: 'px',
          position: 'absolute',
          backgroundColor: '#919191',
          height: '48px', // Chiều cao của Box
          width: '74px', // Chiều rộng của Box
          bottom: '4px',
          left: '49px',


        }}
        // //variant="primary"
        // loading={false}
        // disabled={false}
        // type="highlight"
        // htmlType="button"
        // fullWidth={false}
        // icon={null}
        // onClick={() => alert('Button clicked!')}
      >
      </Button> 

      <Button
        className="cart-button"
        style={{
          //padding: '10px 20px',
          position: 'absolute',
          backgroundColor: '#919191',
          height: '48px', // Chiều cao của Box
          width: '74px', // Chiều rộng của Box
          bottom: '30px',
          left: '123px',
          borderRadius: '32px', // Đảm bảo Button là hình chữ nhật góc vuông


        }}
        //variant="primary"
        //loading={false}
        //disabled={false}
        //type="highlight"
        //htmlType="button"
        //fullWidth={false}
        //icon={null}
        //onClick={() => alert('Button clicked!')}
      ></Button>

    </Box>
    <Box
      id="section-box2"
      className="my-custom-box"
      style={{ 
        position: 'fixed', // Đặt Box cố định
        bottom: 87, // Đặt Box ở vị trí dưới cùng
        left: 0,
        right: 0, // Đảm bảo Box chiếm toàn bộ chiều rộng của thiết bị
        borderTopLeftRadius: '32px', // Bo góc trên trái
        borderTopRightRadius: '32px', // Bo góc trên phải
        backgroundColor: '#00FF22', // Màu nền mới
        border: '1px solid #ccc',
        height: '87px', // Chiều cao của Box
        width: '393px', // Chiều rộng của Box
      }}
    >
      <Box
      id="section-buy"
      className="my-custom-box1"
      style={{ 
        position: 'fixed', // Đặt Box cố định
        bottom: 102, // Đặt Box ở vị trí dưới cùng
        left: 21,
        right: 22, // Đảm bảo Box chiếm toàn bộ chiều rộng của thiết bị
        borderTopLeftRadius: '32px', // Bo góc trên trái
        borderTopRightRadius: '32px', // Bo góc trên phải
        borderBottomLeftRadius: '32px', // Bo góc dưới trái
        borderBottomRightRadius: '32px', // Bo góc dưới phải
        backgroundColor: '#000000', // Màu nền mới
        height: '56px', // Chiều cao của Box
        width: '350px', // Chiều rộng của Box
        filter: 'drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25))', // Thêm filter drop-shadow


      }}
      
    ></Box>
    </Box>
    </Box>
  </Page>
  );
}
export default Simple