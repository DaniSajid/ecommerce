import React from 'react'

const CustomCard = ({ imagePath }) => {
    return (
        <>

            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="card card-cover bg-dark overflow-hidden text-bg-dark css-custom-card shadow-lg" style={{
                    backgroundImage: `url(${imagePath})`,
                }}>
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h3>
                        <ul className="d-flex list-unstyled mt-auto">
                            <li className="me-auto bg-white css">
                                <i className="bi bi-lock text-dark css-icon-custom"></i>
                            </li>
                            <li className="d-flex align-items-center me-3">
                                <small>Earth</small>
                            </li>
                            <li className="d-flex align-items-center">

                                <small>3d</small>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CustomCard