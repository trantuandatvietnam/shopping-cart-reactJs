import React, { createContext, useEffect, useState } from "react";

DataProvider.propTypes = {};
const DataContext = createContext();
function DataProvider(props) {

  const [products, setProducts] = useState([
    {
      _id: "1",
      title: "Áo bẹt dáng vai rộng",
      images: [
        "https://product.hstatic.net/200000000131/product/den-3_da7e346154974c57bffcf7bc8b435595_master.jpg",
        "https://product.hstatic.net/200000000131/product/den-4_ea274b55b25a4d7e99b786b9865bc342_master.jpg",
        "https://product.hstatic.net/200000000131/product/xanh-1_648becc3e8d640d0b2d1b10581aeee20_master.jpg",
      ],
      description: "Áo bẹt đẹp, giá tốt, thích hợp cho chị em đi chơi, đi làm",
      content:
        "Thiết kế họa tiết ngựa vằn với chất liệu lụa mát mẻ trẻ trung chi tiết cổ khóet cực kỳ điệu đà giúp tôn thêm vẻ đẹp của người mặc.",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 101,
      count: 1
    },
    {
      _id: "2",
      title: "Áo thun polo",
      images: [
        "https://product.hstatic.net/200000000131/product/xanh-4_cfaa8446030e4a8192ff3eddd3a6c6a0_master.jpg",
        "https://product.hstatic.net/200000000131/product/xanh-03_22b13260bba943bbaaeb99c36cd33ee8_master.jpg",
        "https://product.hstatic.net/200000000131/product/do-04_9a3ba9f6caf54376b6e0fca933ca9ba7_master.jpg",
        "https://product.hstatic.net/200000000131/product/do-03_b13efcca72db4bf080fbe60372a51187_master.jpg",
      ],
      description:
        "Vải lụa là chất liệu vải có bề mặt mỏng, mịn, cảm giác mềm mướt khi chạm tay vào.",
      content:
        "Khả năng thấm hút mồ hôi tốt tạo sự thoáng mát khi mặc và không gây kích ứng da.",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 102,
      count: 1
    },
    {
      _id: "3",
      title: "Đầm mini tay tròn",
      images: [
        "https://product.hstatic.net/200000000131/product/xanh-3_2ead13cdba524307af679ffacd9407f9_master.jpg",
        "https://product.hstatic.net/200000000131/product/xanh-2_a5acccde694945c3aaf7191cc58a5e7c_master.jpg",
        "https://product.hstatic.net/200000000131/product/den-3_7dcf21d8aaba417d83847b45c4fe9821_master.jpg",
        "https://product.hstatic.net/200000000131/product/den-1_e62c1b42af7e478fab7f1caf20589e8b_master.jpg",
      ],
      description:
        "Chất liệu: Dạ mịn có nguồn gốc từ các sợi thiên nhiên có ưu điểm nổi trội là giữ ấm, giữ nhiệt tốt. Bề mặt vải mềm mịn, độ bền cao, có tính đàn hồi tốt, là chất liệu tuyệt vời để tạo nên những chiếc áo khoác duyên dáng, cuốn hút trong những ngày đại hàn.",
      content:
        "Thiết kế áo khoác dáng croptop hơi A mang đến sự phóng khoáng. Cổ 2 ve thanh lịch. Áo 1 cúc, đai eo tạo điểm nhấn cho chiếc áo. Dễ kết hợp với cả đầm hoặc set đồ. Hoặc chân váy ghép bộ làm tăng thêm sự thanh lịch, thời thượng cho bạn gái. Phù hợp cả đi làm lẫn đi chơi dạo phố.",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 103,
      count: 1
    },
    {
      _id: "4",
      title: "Chân váy hai tầng",
      images: [
        "https://product.hstatic.net/200000000131/product/kem-1_765b4703bead427d959ad1e16b6a1f3d_master.jpg",
        "https://product.hstatic.net/200000000131/product/kem-4_2381a151f1bb4f9e8f36088ad85766de_master.jpg",
        "https://product.hstatic.net/200000000131/product/den-2_8a200e547c0742bf8db4582b5f461136_master.jpg",
        "https://product.hstatic.net/200000000131/product/den-4_fa816f6df2894135acf6cf4026223f0d_master.jpg",
      ],
      description:
        "Chất liệu : Một lớp len montoghi Mô tả sản phẩm : Áo len dáng ôm, cổ tròn, tay dài loe, gấu tay dệt bèo.Thông số sản phẩm : (Dài áo)*(Ngực)*(Dài tay)",
      content:
        "Mô tả sản phẩm : Dáng xòe, cúp ngực xếp nếp, kéo khóa giọt lệ sau lưng, tùng xòe, tay áo xếp nếp vai bồng.",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 104,
      count: 1
    },
    {
      _id: "5",
      title: "Quần short Chấu Âu",
      images: [
        "https://product.hstatic.net/200000000131/product/trang-1_559743a1bea2486b93e33d726a4fd0ee_master.jpg",
        "https://product.hstatic.net/200000000131/product/trang-03_104cb8fca93641c0b3015231ce5a856a_master.jpg",
        "https://product.hstatic.net/200000000131/product/kem-01_4f5b1eeba53341d89d1acecc3749978e_master.jpg",
        "https://product.hstatic.net/200000000131/product/kem-01_4f5b1eeba53341d89d1acecc3749978e_master.jpg",
      ],
      description:
        "Chất liệu: Dạ mịn có nguồn gốc từ các sợi thiên nhiên có ưu điểm nổi trội là giữ ấm, giữ nhiệt tốt. Bề mặt vải mềm mịn, độ bền cao, có tính đàn hồi tốt, là chất liệu tuyệt vời để tạo nên những chiếc áo khoác duyên dáng, cuốn hút trong những ngày đại hàn.",
      content:
        "Thiết kế áo khoác dáng croptop hơi A mang đến sự phóng khoáng. Cổ 2 ve thanh lịch. Áo 1 cúc, đai eo tạo điểm nhấn cho chiếc áo. Dễ kết hợp với cả đầm hoặc set đồ. Hoặc chân váy ghép bộ làm tăng thêm sự thanh lịch, thời thượng cho bạn gái. Phù hợp cả đi làm lẫn đi chơi dạo phố.",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 105,
      count: 1
    },
    {
      _id: "6",
      title: "Quần skinny",
      images: [
        "https://product.hstatic.net/200000000131/product/kem-01_4f5b1eeba53341d89d1acecc3749978e_master.jpg",
        "https://product.hstatic.net/200000000131/product/den-02_b027c09e967c42019766da1eb1fc333d_master.jpg",
        "https://product.hstatic.net/200000000131/product/nau-01_b4d1e52298764257887a55fe754d8eba_master.jpg",
        "https://product.hstatic.net/200000000131/product/nau-02_97a6122b3cca499d82613af93b07aff1_master.jpg",
      ],
      description:
        "Chất liệu : Một lớp len montoghi Mô tả sản phẩm : Áo len dáng ôm, cổ tròn, tay dài loe, gấu tay dệt bèo. Thông số sản phẩm : (Dài áo)*(Ngực)*(Dài tay)",
      content:
        "Mô tả sản phẩm : Dáng xòe, cúp ngực xếp nếp, kéo khóa giọt lệ sau lưng, tùng xòe, tay áo xếp nếp vai bồng.Thông số sản phẩm : (Dài)*(Ngực)*(Eo)",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 106,
      count: 1
    },
  ]);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem("DATA_CART"));
    if (dataCart) {
      setCart(dataCart);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("DATA_CART", JSON.stringify(cart));
  }, [cart])
  const addCart = (id) => {
    const check = cart.every(item => {
      return item._id !== id;
    })

    if (check) {
      const data = products.filter(product => {
        return product._id === id;
      })
      setCart([...cart, ...data]);
    } else {
      alert("The product has been added to cart");
    }
  }
  const value = {
    cart: [cart, setCart],
    products: [products, setProducts],
    addCart: addCart
  }
  return (
    <DataContext.Provider value={value}>
      {props.children}
    </DataContext.Provider>
  );
}
export { DataContext };
export default DataProvider;
