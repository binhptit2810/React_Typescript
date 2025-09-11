export default function Loading() {
    return (
        <div
            style={{
                width: "150px",
                height: "150px",
                backgroundColor: "gray",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    border: "5px solid #f3f3f3",
                    borderTop: "5px solid white",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    animation: "spin 1s linear infinite",
                }}
            />
            <style>
                {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
            </style>
        </div>
    );
}
