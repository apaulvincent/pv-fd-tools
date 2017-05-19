export const BoxModel = ({styles, text}) => (
        <div className="box-model-wrap">
            <div className="box-model" style={styles}>
                <pre><code>{text}</code></pre>
            </div>
        </div>
    )
