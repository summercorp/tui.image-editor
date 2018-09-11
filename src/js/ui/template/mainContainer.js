export default ({commonStyle, headerStyle, loadButtonStyle, downloadButtonStyle, submenuStyle}) => (`
    <div class="tui-image-editor-main-container" style="${commonStyle}">
        <div class="tui-image-editor-header" style="${headerStyle}">
            <div class="tui-image-editor-header-logo">
                <h4 style="color: white; margin: 0;">ANORMALIZER</h4>
            </div>
            <div class="tui-image-editor-header-buttons">
                <button style="${loadButtonStyle}" onclick="onClickVideo()">
                    동영상 불러오기
                </button>
                <button style="${loadButtonStyle}">
                    이미지 불러오기
                    <input type="file" class="tui-image-editor-load-btn" onchange="onChangeFile()"/>
                </button>
                <button class="tui-image-editor-download-btn" style="${downloadButtonStyle}">
                    다운로드
                </button>
            </div>
        </div>
        <div class="tui-image-editor-main">
            <div class="tui-image-editor-submenu" style="${submenuStyle}">
            </div>
            <div class="tui-image-editor-wrap">
                <div class="tui-image-editor-size-wrap">
                    <div class="tui-image-editor-align-wrap">
                        <div class="tui-image-editor"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`);
