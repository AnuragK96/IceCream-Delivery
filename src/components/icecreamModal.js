import React from "react";
import { Modal, Button, Skeleton, Switch, Card, Avatar } from "antd";
import { PlusOutlined } from '@ant-design/icons';

const { Meta } = Card;

const data = [
  {
    name: 'DONNIE DARCOCOA',
    description: 'Velvety dark chocolate and cocoa powder combined with a hint of coffee to richen the flavour. Donnie is your ice cream version of tall, dark, and handsome.',
    cost: 20,
    avatar: 'https://images.squarespace-cdn.com/content/v1/5c8fff2cd74562187a6da524/1595443941257-NI8VT2IP0LI9XJYUB72I/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0topjEaZcWjtmMYdCWL4dkGbxs35J-ZjFa9s1e3LsxrX8g4qcOj2k2AL08mW_Htcgg/chocolate.png?format=750w'
  },
  {
    name: 'PLAIN JANE',
    description: 'Much like old-school vanilla ice cream, Jane is a classic, but she’s made ‘not-so-plain’ with real vanilla bean, cottage cheese, and Winnipeg’s Beeproject honey!',
    cost: 40,
    avatar: 'https://images.squarespace-cdn.com/content/v1/5c8fff2cd74562187a6da524/1595444052955-6GA4QMTUO7X73NDP977O/ke17ZwdGBToddI8pDm48kIdNPVElDtR_JQ5zj1VqOSd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0rt8b5YOtxlPcG6xDnvL2h7FBWXUwUcbm8s1OPhF__RuFChFOFSxV8yopI9u-lsOWw/Vanilla.png?format=750w'
  },
  {
    name: 'MUSTANG SALLY',
    description: 'Made with De Luca’s dark roast beans then balanced with smooth, white chocolate for a frothy latte experience. Sally has enough horsepower to get you through the day!',
    cost: 20,
    avatar: 'https://images.squarespace-cdn.com/content/v1/5c8fff2cd74562187a6da524/1595444130827-YAILHBGJ8OCHR14XXGCL/ke17ZwdGBToddI8pDm48kIdNPVElDtR_JQ5zj1VqOSd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0rt8b5YOtxlPcG6xDnvL2h7FBWXUwUcbm8s1OPhF__RuFChFOFSxV8yopI9u-lsOWw/sally.png?format=750w'
  },
  {
    name: 'PRAIRIE BARRY',
    description: 'Barry is anything but ordinary! With 30% strawberries in every scoop, his fruity base is mixed with rich white chocolate and sour cream for the perfect level of sweetness.',
    cost: 13,
    avatar: 'https://images.squarespace-cdn.com/content/v1/5c8fff2cd74562187a6da524/1595445519136-AGP79ONCGT9TBH6JJ9D2/ke17ZwdGBToddI8pDm48kOM0wi0zWgY49OChaGdbQod7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UQm-dUUJalI5hpyo_WmK1znWXHzgmKrnzlC6TU6GdiPuOpYghpI-Ha_TwZsqqmJXng/Untitled+design+%281%29.png?format=750w'
  },
  {
    name: 'LOUIS LAVENDER',
    description: 'Locally grown ingredients like Purple Berry Orchard Saskatoon berries and Sage Garden lavender, this award-winning flavour would make the Father of Manitoba proud!',
    cost: 85,
    avatar: 'https://images.squarespace-cdn.com/content/v1/5c8fff2cd74562187a6da524/1595444214626-TTDJF5WBLDIGGMC9JGY8/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/Lavender.jpg?format=750w'
  }
]

class IceCreamModal extends React.Component {

  render() {
    return (
      <>
        <Modal
          title="Select an icecream"
          visible={this.props.visible}
          footer={null}
          onCancel={this.props.onCancel}
        >
          {
            data.map((a) => (
              <Card
                key={a.name}
                style={{  marginTop: 10 }}
                actions={[
                  <div onClick={()=>this.props.onSelectIcecream(a)}><PlusOutlined key="setting" style={{width: 40}} /> {' Select this icecream'}</div>,
                ]}
              >
                <Skeleton loading={false} avatar active>
                  <Meta
                    avatar={
                      <Avatar src={a.avatar} />
                    }
                    title={`${a.name} (${a.cost}$)`}
                    description={a.description}
                  />
                </Skeleton>
              </Card>
            ))
          }
        </Modal>
      </>
    );
  }
}
export default IceCreamModal;
