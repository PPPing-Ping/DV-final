import React, { useState } from 'react'
import { DiffCheck } from '@/context/value'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Head from 'next/head'
// ----引入元件----
import BsCard from '@/components/lesson/Bs-card'
import AddrCheck from '@/components/lesson/Addrcheck'
import Difflayout from '@/components/lesson/Diffcheck'
import List from '@/components/lesson/List'
import Star from '@/components/lesson/star'
// ----引入Icon----
import { FaMagnifyingGlass, FaMinus, FaChevronRight } from 'react-icons/fa6'
// ----引入Scss----
import Style from '@/styles/lessonStyle/lesson.module.scss'
import LessonData from '@/data/lesson/lesson'

export default function Test() {
  const fav = Array.from({ length: 5 })
  const LV = ['體驗', '中階', '初級']
  const difficultys = LessonData
  const [checkvalue, setCheckvalue] = useState(new Array(LV.length).fill(false))

  return (
    <>
      <Head>
        <title>課程總覽</title>
      </Head>
      <DiffCheck.Provider value={{ checkvalue, setCheckvalue }}>
        <Container
          className={`${Style.bg_color} ${Style.pt} d-none d-lg-block d-md-none d-lg-block lesson`}
          style={{ paddingTop: '5rem' }}
        >
          <Row className="">
            <Col lg="3">
              <div className="fs-3">課程分類</div>
              <hr />
              <div className="mb-3">
                <div className="fs-4 mb-1">商品評價</div>
                {/* ---插入star--- */}
                <Star></Star>
              </div>
              <div className="mb-3">
                <div className="fs-4">價格收尋</div>
                <div className="mb-3 d-flex">
                  <input
                    type="number"
                    className="form-control"
                    id=""
                    placeholder="Low Price"
                    onChange={() => {}}
                  />
                  <span className="d-flex align-items-center px-1">
                    <FaMinus />
                  </span>
                  <input
                    type="number"
                    className="form-control"
                    id=""
                    placeholder="High Price"
                    onChange={() => {}}
                  />
                  <div className="btn border align-items-center">
                    <FaChevronRight />
                    <i className="fa-solid fa-greater-than text-center"></i>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <div className="fs-4">地點</div>
                <AddrCheck />
              </div>
              <div className="mb-3">
                <div className="fs-4">潛點等級</div>
                <Difflayout />
              </div>
            </Col>
            <Col
              lg="9"
              className={`${Style.scrollbar_area} ${Style.scrollbar} `}
            >
              <div
                className={`${Style.bg_color} d-flex justify-content-between sticky-top`}
              >
                <div className="fs-3">課程總覽</div>

                <div className="d-flex align-items-center">
                  <div
                    className="input-group input-group-sm align-self-center me-1"
                    onChange={() => {}}
                  >
                    <select
                      className="form-select form-select-sm"
                      value={'ss'}
                      onChange={() => {}}
                    >
                      <option value="評價高到低">評價高到低</option>
                      <option value="ss">Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <input
                      type="text"
                      className="form-control"
                      aria-label=""
                      aria-describedby="inputGroup-sizing-sm"
                      onChange={() => {}}
                    />
                  </div>
                  <div className="btn fs-6">
                    <FaMagnifyingGlass className="text-center" />
                  </div>
                </div>
              </div>
              <List />
            </Col>
          </Row>
        </Container>
        <Container
          className={`{${Style.bg_color} {${Style.pt}} d-lg-none pb-3}`}
          style={{ paddingTop: '5rem' }}
        >
          <Row className="">
            <Col sm={6}>
              <BsCard></BsCard>
              <BsCard></BsCard>
            </Col>
            <Col sm={6}>
              <BsCard></BsCard>
              <BsCard></BsCard>
            </Col>
          </Row>
        </Container>
      </DiffCheck.Provider>
    </>
  )
}
