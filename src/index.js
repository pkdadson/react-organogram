import React from 'react'
import styles from './styles.module.css'

export const Organogram = ({ lists, ...props }) => {
  return (
    <div>
      {props.children}
      <div id={styles.wrapper}>
        <div id={styles.container}>
          <ol className={styles.organogram_chart}>
            {lists.map((list, index) => (
              <li key={index}>
                <div>
                  <img src={list.image} width='50' />
                  <h1>{list.title}</h1>
                  <p>{list.description}</p>
                </div>
                {list.children.length != 0 && (
                  <ol>
                    {list.children.map((level1, i) => (
                      <li key={i}>
                        <div>
                          <img src={level1.image} width='50' />
                          <h2>{level1.title}</h2>
                          <p>{level1.description}</p>
                        </div>
                        {level1.children.length != 0 && (
                          <ol>
                            {level1.children.map((level2, ind) => (
                              <li key={ind}>
                                <div>
                                  <img src={level2.image} width='50' />
                                  <h3>{level2.title}</h3>
                                  <p>{level2.description}</p>
                                </div>

                                {level2.children.length != 0 && (
                                  <ol>
                                    {level2.children.map((level3, n) => (
                                      <li key={n}>
                                        <div>
                                          <img src={level3.image} width='50' />
                                          <h4>{level3.title}</h4>
                                          <p>{level3.description}</p>
                                        </div>
                                        {level3.children.length != 0 && (
                                          <ol>
                                            {level3.children.map(
                                              (level4, n) => (
                                                <li key={n}>
                                                  <div>
                                                    <img
                                                      src={level4.image}
                                                      width='50'
                                                    />
                                                    <h5>{level4.title}</h5>
                                                    <p>{level4.description}</p>
                                                  </div>
                                                  {level4.children.length !=
                                                    0 && (
                                                    <ol>
                                                      {level4.children.map(
                                                        (level5, n) => (
                                                          <li key={n}>
                                                            <div>
                                                              <img
                                                                src={
                                                                  level5.image
                                                                }
                                                                width='50'
                                                              />
                                                              <h5>
                                                                {level5.title}
                                                              </h5>
                                                              <p>
                                                                {
                                                                  level5.description
                                                                }
                                                              </p>
                                                            </div>
                                                            {level5.children
                                                              .length != 0 && (
                                                              <ol>
                                                                {level5.children.map(
                                                                  (
                                                                    level6,
                                                                    n
                                                                  ) => (
                                                                    <li key={n}>
                                                                      <div>
                                                                        <img
                                                                          src={
                                                                            level6.image
                                                                          }
                                                                          width='50'
                                                                        />
                                                                        <h6>
                                                                          {
                                                                            level6.title
                                                                          }
                                                                        </h6>
                                                                        <p>
                                                                          {
                                                                            level6.description
                                                                          }
                                                                        </p>
                                                                      </div>
                                                                      {level6
                                                                        .children
                                                                        .length !=
                                                                        0 && (
                                                                        <ol>
                                                                          {level6.children.map(
                                                                            (
                                                                              level7,
                                                                              n
                                                                            ) => (
                                                                              <li
                                                                                key={
                                                                                  n
                                                                                }
                                                                              >
                                                                                <div>
                                                                                  <img
                                                                                    src={
                                                                                      level7.image
                                                                                    }
                                                                                    width='50'
                                                                                  />
                                                                                  <h6>
                                                                                    {
                                                                                      level7.title
                                                                                    }
                                                                                  </h6>
                                                                                  <p>
                                                                                    {
                                                                                      level7.description
                                                                                    }
                                                                                  </p>
                                                                                </div>
                                                                              </li>
                                                                            )
                                                                          )}
                                                                        </ol>
                                                                      )}
                                                                    </li>
                                                                  )
                                                                )}
                                                              </ol>
                                                            )}
                                                          </li>
                                                        )
                                                      )}
                                                    </ol>
                                                  )}
                                                </li>
                                              )
                                            )}
                                          </ol>
                                        )}
                                      </li>
                                    ))}
                                  </ol>
                                )}
                              </li>
                            ))}
                          </ol>
                        )}
                      </li>
                    ))}
                  </ol>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}
