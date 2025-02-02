

const Toast = () => {
  return (
    <div className="toast-container position-fixed bottom-0 me-4 end-0 mb-4">
        <div className="toast show align-items-center d-flex text-white bg-primary">
            <div className="d-flex justify-content-center align-items-center">
                <button type="button" className="btn-close btn-close-wsite ms-3"></button>
                <div className="toast-body">
                    The product is successfully added to your favorite items.
                </div>
            </div>
        </div>
    </div>
  )
}

export default Toast