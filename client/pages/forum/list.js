import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '@/styles/loader/loader_ripple.module.css'
import post from '@/data/forum/post.json'
import {
  Container,
  Dropdown,
  Card,
  Col,
  Row,
  Button,
  Stack,
} from 'react-bootstrap'

export default function List() {
  const [postList, setPostList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const getPost = async () => {
    try {
      // const res = await fetch(
      //   'https://my-json-server.typicode.com/eyesofkids/json-fake-data/products'
      // )
      // 解析為JS的資料類型
      // const data = await res.json()
      const data = post
      console.log(data)

      if (Array.isArray(data)) {
        // 設定到狀態
        setPostList(data)

        setTimeout(() => {
          setIsLoading(false)
        }, 1000)
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getPost()
  }, [])

  console.log('render')
  const loader = (
    <div className={styles['lds-ripple']}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )

  const display = (
    <ul>
      {postList.map((v, i) => {
        return (
          <div key={v.id}>
            <>
              <Container>
                <Row xs={1} md={2} lg={2} className="g-4">
                  {Array.from({ length: 3 }).map((_, idx) => (
                    <Col key={idx}>
                      <Card>
                        <Link
                          href={`/forum/${v.id}`}
                          style={{ textDecoration: 'none' }}
                        >
                          <Card.Img
                            variant="top"
                            src={`/images/post/${v.image}`}
                          />
                        </Link>
                        <Card.Body className="bg-light">
                          <Card.Subtitle className="mb-2 text-primary">
                            {v.author} ﹡ {v.published}
                          </Card.Subtitle>
                          <Card.Title>{v.title}</Card.Title>
                          <Card.Text>{v.content}</Card.Text>
                          <Stack direction="horizontal" gap={3}>
                            <div className="p-2">
                              {' '}
                              <Button variant="primary">{v.tags}</Button>{' '}
                            </div>
                            <div className="p-2 ms-auto">
                              {' '}
                              <Card.Link href="#">more</Card.Link>
                            </div>
                          </Stack>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Container>
            </>
          </div>
        )
      })}
    </ul>
  )

  return (
    <>
      <Container className=" text-end">
        <Row>
          <Col>
            Hi UUUUUUUUUU
            <Link href={'/'}>新增文章</Link> <Link href={'/'}>我的文章</Link>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col className="text-end">
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                排序依據
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  發布日期 - 新到舊
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  發布日期 - 舊到新
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">???</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <input placeholder="Search" type="text" name="" id="" />
          </Col>
        </Row>
      </Container>

      <h3>所有文章</h3>
      <hr />
      {isLoading ? loader : display}
    </>
  )
}
