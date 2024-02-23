import { useState } from 'react'

import Stars from '@/components/product/star/star'
import Carousel from '@/components/product/carousel'
import ProductRecommond from '@/components/product/detail/product-recommond'
import Link from 'next/link'

export default function Detail() {
  const [isSwitchOn, setIsSwitchOn] = useState(false)

  const handleSwitchToggle = () => {
    setIsSwitchOn(!isSwitchOn)
  }

  // const colorBtn = document.querySelector('.color-btn')

  // colorBtn.addEventListener('click', (e) => {
  //   e.currentTarget.classList.add('active')
  // })
  return (
    <>
      <div className="container-1200">
        {/* 麵包屑 */}
        <div className="my-3 d-flex">
          <div className="d-flex align-items-center">
            <Link
              href="/product/list"
              className="p-2"
              style={{ color: '#303132' }}
            >
              <i class="bi bi-droplet-half p-1"></i>品牌
            </Link>
            <div className="p-1">&gt;</div>
            <Link
              href="/product/list"
              className="p-2"
              style={{ color: '#303132' }}
            >
              <i className="bi bi-droplet p-1"></i>商品種類
            </Link>
          </div>
        </div>

        {/* 輪播 */}
        <div className="row mt-5 mx-2">
          <div className="col-sm-7">
            <div className="position-sticky" style={{ top: '2rem' }}>
              <Carousel />
            </div>
          </div>

          <div className="col-sm-5">
            <h3>男士防寒衣</h3>
            <Stars />
            <h6>4.0分 | 8則評價</h6>

            <h6 className="note-text">NT$24,000</h6>
            <p className="text-decoration-line-through type-text">NT$28,000</p>
            <p className="product-desc">
              穿上 Nike Air Force 1 PLT.AF.ORM. 用經典好穿的 AF1 風格脫穎而出。
              優雅版型搭配加厚中底，為籃球鞋系列注入傲嬌新風貌。
            </p>
            <hr />

            {/* 顏色 button */}
            <span className="btn-color p-2">顏色</span>
            <button type="button" className="btn btn-circle">
              紅
            </button>
            <button type="button" className="btn btn-circle color-btn">
              藍
            </button>
            <button type="button" className="btn btn-circle color-btn">
              綠
            </button>
            <br />
            {/* 尺寸 bottom */}
            <span className="btn-size p-2">尺寸</span>
            <button type="button" className="btn btn-circle">
              F
            </button>
            <button type="button" className="btn btn-circle">
              S
            </button>
            <button type="button" className="btn btn-circle">
              M
            </button>
            <button type="button" className="btn btn-circle">
              L
            </button>
            <button type="button" className="btn btn-circle">
              XL
            </button>

            {/* 選擇數量 */}
            <div>
              <button type="button" className="btn btn-circle">
                -
              </button>
              <span className="mx-3">數量</span>
              <button type="button" className="btn btn-circle">
                +
              </button>
            </div>

            {/* 加入購物車 */}
            <button
              className="btn btn-secondary w-100 mb-3 my-3"
              style={{ fontWeight: 'bold', color: 'white' }}
            >
              <i className="bi bi-person-heart"></i> 加入最愛
            </button>
            {/* 加入最愛 */}
            <button className="btn btn-outline-primary w-100">
              加入購物車 <i className="bi bi-cart-plus-fill"></i>
            </button>

            {/* 注意事項 */}
            <div className="product-info my-5">
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                <div className="accordion-item">
                  <h4 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      尺寸與版型
                    </button>
                  </h4>
                  <div
                    id="panelsStayOpen-collapseOne"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body px-1">
                      <ul>
                        <li>版型較大，建議訂購小半號</li>
                        <li>尺寸：尺寸指南</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwo"
                    >
                      免費寄送及退貨
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseTwo"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body px-1">
                      <p>訂單金額滿新臺幣 4,500 元即享免費標準運送服務</p>
                      <p>
                        臺北市:標準運送的商品可於 2-5 個工作天內送達
                        快遞運送的商品可於 2-3 個工作天內送達
                      </p>
                      <p>
                        其它縣市: 標準運送的商品可於 3-6 個工作天內送達
                        快遞運送的商品可於 3-5 個工作天內送達
                      </p>
                      <p>訂單皆於星期一至星期五之間處理與寄送 (國定假日除外)</p>
                      <p>會員享免費退貨服務免費退貨。退貨政策例外情況。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <hr />
        {/* 轉換按鈕 -- 商品介紹/評價 */}
        <div className="form-check form-switch d-flex justify-content-end">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
            checked={isSwitchOn}
            onChange={handleSwitchToggle}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            {isSwitchOn ? '顧客評價' : '商品細節'}
          </label>
        </div>
        {isSwitchOn && (
          <div>
            {/* 顯示顧客評價 */}
            <h3 className="text-center my-2">顧客評價</h3>
            <div className="container">
              <form>
                <div className="form-group">
                  <label className="mx-2" for="exampleFormControlTextarea1">
                    來為 --- 評價吧～
                  </label>
                  <Stars />
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="請撰寫評價"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary d-flex btn-comment"
                >
                  送出評價
                </button>
              </form>
            </div>
            {/* 用戶評價 */}
            <div className="containermt-5 d-flex align-items-center justify-content-center">
              <div className="mt-2">
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div className="avatar">
                    <img src="/images/product/test/20/1-1.webp" alt="..." />
                  </div>
                  <div className="content">
                    <h6>安妮雅 2024/01/01</h6>
                    <Stars />
                    <p>
                      若沒有潛水的存在，那麼後果可想而知。亦舒曾經說過，人生短短數十載，最要緊的是滿足自己，不是討好他人。這影響了我的價值觀。
                    </p>
                  </div>
                </div>

                <hr />
                <button
                  type="submit"
                  className="btn btn-primary d-flex btn-comment"
                >
                  更多評價
                </button>
              </div>
            </div>

            {/* 隨機商品 */}
            <div>
              <h3 className="text-center my-5">你可能會喜歡的商品⋯</h3>
              <ProductRecommond />
            </div>
          </div>
        )}
        {!isSwitchOn && (
          <div>
            {/* 顯示商品細節 */}
            <h3 className="text-center my-2">商品介紹</h3>

            {/* 商品介紹 */}
            <div className="row mt-2 mx-2">
              <div className="col-sm-12">
                <p className="text-center my-3 font-weight-light">
                  鞋面採用車縫皮革裝飾片，全面提升經典指標性、耐久性和支撐力。
                </p>
                <div>
                  <div className="p-2 my-3 custom-image-container">
                    <img src="/images/product/test/20/20-detail1.jpg" />
                    {/* `${}` */}
                  </div>
                  <div className="p-2 my-3 custom-image-container">
                    <img src="/images/product/test/20/20-detail1.jpg" />
                    {/* `${}` */}
                  </div>
                  <div className="p-2 my-3 custom-image-container">
                    <img src="/images/product/test/20/20-detail1.jpg" />
                    {/* `${}` */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .container-1200 {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0;
        }
        @media screen and (max-width: 576px) {
          .width-1200 {
            width: 380px;
          }
        }
        .note-text {
          color: var(--red, #dc5151);
          font-size: 14.5px;
        }

        .type-text {
          color: var(--gray, #858585);
          font-weight: normal;
          font-size: 12.5px;
        }

        .btn-md:hover,
        .btn-outline-primary:hover,
        .btn-circle:hover {
          background-color: #265475;
          color: #fff;
          border: none;
        }
        .btn-comment {
          background-color: #265475;
          margin: 18px auto;
          border-radius: 100px;
          padding: 10px 20px;
        }
        .btn-color {
          margin: 5px 0;
        }
        .btn-size {
          margin: 5px 0;
        }
        .btn-circle {
          margin: 5px 0;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #f5f5f5;
          font-size: 16px;
          background-color: transparent;
        }
        .circle-container {
          display: flex;
          align-items: center;
        }
        .custom-image-container {
          margin: 0 auto;
          width: 600px;
          height: 480px;
        }
        .custom-image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .content {
          height: 80px;
        }
        .avatar {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          overflow: hidden;
          margin: 15px;
        }

        .avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover; /* 保持图片比例填充整个容器 */
        }
      `}</style>
    </>
  )
}
