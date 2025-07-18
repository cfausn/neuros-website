#!/bin/bash

echo "Starting asset download process..."

mkdir -p assets/{fonts,images,js,icons,data}

total_files=0
successful_downloads=0
failed_downloads=0

download_file() {
    local url=$1
    local output_path=$2
    local max_retries=3
    local retry_count=0
    
    while [ $retry_count -lt $max_retries ]; do
        if wget -q --show-progress "$url" -O "$output_path" 2>/dev/null; then
            echo "✓ Downloaded: $(basename "$output_path")"
            ((successful_downloads++))
            return 0
        else
            ((retry_count++))
            if [ $retry_count -lt $max_retries ]; then
                echo "⚠ Retry $retry_count/$max_retries for: $(basename "$output_path")"
                sleep 2
            fi
        fi
    done
    
    echo "✗ Failed to download: $url"
    ((failed_downloads++))
    return 1
}

echo -e "\n📁 Downloading fonts..."
fonts=(
    "https://framerusercontent.com/assets/8146yzNKvCxUwupBkhahgl8q4.woff2"
    "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2"
    "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2"
    "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2"
    "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2"
    "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2"
    "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2"
    "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2"
    "https://framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2"
    "https://framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2"
    "https://framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2"
    "https://framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2"
    "https://framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2"
    "https://framerusercontent.com/assets/1ZFS7N918ojhhd0nQWdj3jz4w.woff2"
    "https://framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2"
    "https://framerusercontent.com/assets/gazZKZuUEtvr9ULhdA4SprP0AZ0.woff2"
    "https://framerusercontent.com/assets/pe8RoujoPxuTZhqoNzYqHX2MXA.woff2"
    "https://framerusercontent.com/assets/teGhWnhH3bCqefKGsIsqFy3hK8.woff2"
    "https://framerusercontent.com/assets/qQHxgTnEk6Czu1yW4xS82HQWFOk.woff2"
    "https://framerusercontent.com/assets/MJ3N6lfN4iP5Um8rJGqLYl03tE.woff2"
    "https://framerusercontent.com/assets/dHHUz45rhM2KCQpj9zttNVlibk.woff2"
    "https://framerusercontent.com/assets/0SEEmmWc3vovhaai4RlRQSWRrz0.woff2"
    "https://framerusercontent.com/assets/2uIBiALfCHVpWbHqRMZutfT7giU.woff2"
    "https://framerusercontent.com/assets/Zwfz6xbVe5pmcWRJRgBDHnMkOkI.woff2"
    "https://framerusercontent.com/assets/U9LaDDmbRhzX3sB8g8glTy5feTE.woff2"
    "https://framerusercontent.com/assets/tVew2LzXJ1t7QfxP1gdTIdj2o0g.woff2"
    "https://framerusercontent.com/assets/DF7bjCRmStYPqSb945lAlMfCCVQ.woff2"
    "https://framerusercontent.com/assets/nCpxWS6DaPlPe0lHzStXAPCo3lw.woff2"
    "https://framerusercontent.com/assets/vebZUMjGyKkYsfcY73iwWTzLNag.woff2"
    "https://framerusercontent.com/assets/I11LrmuBDQZweplJ62KkVsklU5Y.woff2"
    "https://framerusercontent.com/assets/UjFZPDy3qGuDktQM4q9CxhKfIa8.woff2"
    "https://framerusercontent.com/assets/8exwVHJy2DhJ4N5prYlVMrEKmQ.woff2"
    "https://framerusercontent.com/assets/UTeedEK21hO5jDxEUldzdScUqpg.woff2"
    "https://framerusercontent.com/assets/Ig8B8nzy11hzIWEIYnkg91sofjo.woff2"
    "https://framerusercontent.com/assets/n9CXKI3tsmCPeC6MCT9NziShSuQ.woff2"
    "https://framerusercontent.com/assets/qctQFoJqJ9aIbRSIp0AhCQpFxn8.woff2"
    "https://framerusercontent.com/assets/fXvVh2JeZlehNcEhKHpHH0frSl0.woff2"
    "https://framerusercontent.com/assets/7pScaNeb6M7n2HF2jKemDqzCIr4.woff2"
    "https://framerusercontent.com/assets/qS4UjQYyATcVV9rODk0Zx9KhkY8.woff2"
    "https://framerusercontent.com/assets/VfD2n20yM7v0hrUEBHEyafsmMBY.woff2"
    "https://framerusercontent.com/assets/4oIO9fB59bn3cKFWz7piCj28z9s.woff2"
    "https://framerusercontent.com/assets/TBccIZR9kIpkRce5i9ATfPp7a4.woff2"
    "https://framerusercontent.com/assets/F5Lmfd3fCAu7TwiYbI4DLWw4ks.woff2"
    "https://framerusercontent.com/assets/THWAFHoAcmqLMy81E8hCSdziVKA.woff2"
    "https://framerusercontent.com/assets/sQxGYWDlRkDr0eOKqiNRl6g5rs.woff2"
    "https://framerusercontent.com/assets/NNTAT1XAm8ZRkr824inYPkjNeL4.woff2"
    "https://framerusercontent.com/assets/P2qr9PAWBt905929rHfxmneMUG0.woff2"
    "https://framerusercontent.com/assets/2BmSa4TZZvFKAZg2DydxTbvKlTU.woff2"
    "https://framerusercontent.com/assets/djqIk3Er2JcAcz7Rup88BdINEw.woff2"
    "https://framerusercontent.com/assets/KMFW46iYsEZaUBwXbwPc9nQm71o.woff2"
    "https://framerusercontent.com/assets/ePuN3mCjzajIHnyCdvKBFiZkyY0.woff2"
    "https://framerusercontent.com/assets/V3j1L0o5vPFKe26Sw4HcpXCfHo.woff2"
    "https://framerusercontent.com/assets/F3kdpd2N0cToWV5huaZjjgM.woff2"
    "https://framerusercontent.com/assets/0iDmxkizU9goZoclqIqsV5rvETU.woff2"
    "https://framerusercontent.com/assets/r0mv3NegmA0akcQsNFotG32Las.woff2"
    "https://framerusercontent.com/assets/8yoV9pUxquX7VD7ZXlNYKQmkmk.woff2"
    "https://framerusercontent.com/assets/Ii21jnSJkulBKsHHXKlapi7fv9w.woff2"
    "https://framerusercontent.com/assets/A5P4nkYCJlLQxGxaS1lzG8PNSc.woff2"
    "https://framerusercontent.com/assets/vuPfygr1n1zYxscvWgGI8hRf3LE.woff2"
    "https://framerusercontent.com/assets/jplzYzqFHXreyADwk9yrkQlWQ.woff2"
    "https://framerusercontent.com/assets/sSIKP2TfVPvfK7YVENPE5H87A.woff2"
    "https://framerusercontent.com/assets/gawbeo7iEJSRZ4kcrh6YRrU8o.woff2"
    "https://framerusercontent.com/assets/xSzma7KIWAdctStaX171ey3lams.woff2"
    "https://framerusercontent.com/assets/8E92vrr3j1gDqzepmeSbD2u0JxA.woff2"
)

for font_url in "${fonts[@]}"; do
    filename=$(basename "$font_url")
    download_file "$font_url" "assets/fonts/$filename"
    ((total_files++))
done

echo -e "\n📁 Downloading images..."
images=(
    "https://framerusercontent.com/images/WYHWoknHloH6UW5BVHCTpqrGxXA.png"
    "https://framerusercontent.com/images/np40RoEgRBdRx2GsmyIGjydkkZM.png"
    "https://framerusercontent.com/images/4jI8PKVup6mc144dFZBMPotnI8.png"
    "https://framerusercontent.com/images/4WQC416Q3eGLgUlW8KatiW39TQ.png"
    "https://framerusercontent.com/images/5flDa6h0tLMfAkedXI1Duq0aWc.png"
    "https://framerusercontent.com/images/5wLZg1aqkn9GinruuMYG31xYEc.png"
    "https://framerusercontent.com/images/73GV9pYQnwoVZVtPVX6DgT5e5k.png"
    "https://framerusercontent.com/images/7mpYTe6ZOFJ3US6r1gBJ4l5fOc.png"
    "https://framerusercontent.com/images/BUEow12MtsUXTWxZoWwZeX7Xyk.png"
    "https://framerusercontent.com/images/Cf05Kjo4fpRFAClPyde1yKp9yE.png"
    "https://framerusercontent.com/images/DK1YjqLI0cvfiGoMAF4L7KgvGM.png"
    "https://framerusercontent.com/images/eudVSD5PZPEX9WNMrMDccGyoQfw.png"
    "https://framerusercontent.com/images/FjvAihbmp180SV9ouX1XtzxV4s.png"
    "https://framerusercontent.com/images/hUGIeVCboJqMVHrVM7DVzjWzp8.png"
    "https://framerusercontent.com/images/KX5e30Vcch9zTjUwh6IgVJoGiE.png"
    "https://framerusercontent.com/images/m024iVuDGATdcAvQ3EidajfqW8.png"
    "https://framerusercontent.com/images/nszA2FHu2qGp4DDm5XSHqEPI.png"
    "https://framerusercontent.com/images/O4CgIM8KUlUHDvA3DiXHby593I.png"
    "https://framerusercontent.com/images/RmQCtdJloyAXnLLud5A0l07AXNw.png"
    "https://framerusercontent.com/images/SN2UkOPSbDI9eoELW2jBk9pGk.png"
    "https://framerusercontent.com/images/UIfx9Fs7DjfFWqd3NVCjCkO1do.png"
    "https://framerusercontent.com/images/vajGwpSWvF4HmwncZ0aJEt7too.png"
    "https://framerusercontent.com/images/Ym1NKzwIhdgeO39SiGCxhwSV70.png"
    "https://framerusercontent.com/images/zOf7tHo9rMAXIW8ndoIOfbAqrw.png"
    "https://framerusercontent.com/images/5VTOkVECB12k3Q3CLMkXdlv0xxc.jpeg"
    "https://framerusercontent.com/images/hyGHBsijDWzG5qW82Lrmg7qggQ.jpeg"
    "https://framerusercontent.com/images/kkXCZPvmfCHbPGl5hc6tLKJz2ic.jpeg"
    "https://framerusercontent.com/images/VC1837o59cndaQvwO5bqn4jF8c.jpeg"
    "https://framerusercontent.com/images/vWqZzfHsGV4HKd6VbV27oGKKP3A.jpeg"
    "https://framerusercontent.com/images/wOzaThry1gMSNkurEaTHfOT6Rc.jpeg"
    "https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg"
    "https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg"
)

for img_url in "${images[@]}"; do
    filename=$(basename "$img_url")
    download_file "$img_url" "assets/images/$filename"
    ((total_files++))
done

echo -e "\n📁 Downloading JavaScript modules..."
js_files=(
    "https://framerusercontent.com/sites/5ljtTRSJ5EKVDWRR15i4Sv/script_main.47NMDZRB.mjs"
    "https://framerusercontent.com/sites/5ljtTRSJ5EKVDWRR15i4Sv/chunk-JOUMKV3D.mjs"
    "https://framerusercontent.com/sites/5ljtTRSJ5EKVDWRR15i4Sv/chunk-HZL4YIMB.mjs"
    "https://framerusercontent.com/sites/5ljtTRSJ5EKVDWRR15i4Sv/chunk-A3IIQ6X3.mjs"
    "https://framerusercontent.com/sites/5ljtTRSJ5EKVDWRR15i4Sv/chunk-22CK3BVJ.mjs"
    "https://framerusercontent.com/sites/5ljtTRSJ5EKVDWRR15i4Sv/chunk-2XRT5AE4.mjs"
    "https://framerusercontent.com/sites/5ljtTRSJ5EKVDWRR15i4Sv/chunk-42U43NKG.mjs"
    "https://framerusercontent.com/sites/5ljtTRSJ5EKVDWRR15i4Sv/chunk-4WVXJLHY.mjs"
    "https://framerusercontent.com/sites/5ljtTRSJ5EKVDWRR15i4Sv/chunk-5UDW5BHL.mjs"
    "https://framerusercontent.com/sites/5ljtTRSJ5EKVDWRR15i4Sv/chunk-CR5SNPMD.mjs"
    "https://framerusercontent.com/sites/5ljtTRSJ5EKVDWRR15i4Sv/chunk-DGRYFZ2W.mjs"
    "https://framerusercontent.com/sites/5ljtTRSJ5EKVDWRR15i4Sv/chunk-DRBNGD4N.mjs"
    "https://framerusercontent.com/sites/5ljtTRSJ5EKVDWRR15i4Sv/chunk-F2FK4L2J.mjs"
    "https://framerusercontent.com/sites/5ljtTRSJ5EKVDWRR15i4Sv/chunk-GXMV7PJO.mjs"
    "https://framerusercontent.com/sites/5ljtTRSJ5EKVDWRR15i4Sv/chunk-K7VTPSHK.mjs"
    "https://framerusercontent.com/sites/5ljtTRSJ5EKVDWRR15i4Sv/chunk-KQQAAMAP.mjs"
    "https://framerusercontent.com/sites/5ljtTRSJ5EKVDWRR15i4Sv/chunk-N6Z5HK43.mjs"
    "https://framerusercontent.com/sites/5ljtTRSJ5EKVDWRR15i4Sv/chunk-OSLC4OID.mjs"
    "https://framerusercontent.com/sites/5ljtTRSJ5EKVDWRR15i4Sv/chunk-QMZVYECB.mjs"
    "https://framerusercontent.com/sites/5ljtTRSJ5EKVDWRR15i4Sv/chunk-VJ5HCEJR.mjs"
    "https://framerusercontent.com/sites/5ljtTRSJ5EKVDWRR15i4Sv/chunk-XJRN4VYJ.mjs"
    "https://framerusercontent.com/sites/5ljtTRSJ5EKVDWRR15i4Sv/chunk-YE3YHFUH.mjs"
    "https://framerusercontent.com/sites/5ljtTRSJ5EKVDWRR15i4Sv/2cDzO3rOx09ou2wI9nmIQES8bA43VOdFw8u1ChS9Ggg.4BW3CHXC.mjs"
    "https://framerusercontent.com/sites/5ljtTRSJ5EKVDWRR15i4Sv/EOVJPqStBzPjmLe7GPwVFc92o2Ke4mBR-8yTaUNFPJM.WGFL7L7J.mjs"
    "https://framerusercontent.com/sites/5ljtTRSJ5EKVDWRR15i4Sv/mNKYuq6mQlauIvG2oXSUebOYxBC0wCUaKstwgBoa50o.HKGDSTH6.mjs"
    "https://framerusercontent.com/sites/5ljtTRSJ5EKVDWRR15i4Sv/o-4387bI7cHZlzM7ueoLn4tkPRGPc7aALthtc5VPYXI.FQQNW6RX.mjs"
    "https://framerusercontent.com/sites/5ljtTRSJ5EKVDWRR15i4Sv/QCBAL9iY-LjwQYV7wAGlWVrkLhYaCmZ1qF2h9PpJ0Y8.QSWW6YDE.mjs"
    "https://framerusercontent.com/sites/5ljtTRSJ5EKVDWRR15i4Sv/rOr-bzR0AOBdnmqNhsjlJVpDg8QHXrzCXCZ8x30SpyY.OUXIFUAC.mjs"
    "https://framerusercontent.com/sites/5ljtTRSJ5EKVDWRR15i4Sv/rumlxVvbesR6aZ3_Z0lC11lKZ_8nbgMUMmpZv5waYZo.LCOYGKQL.mjs"
    "https://framerusercontent.com/sites/5ljtTRSJ5EKVDWRR15i4Sv/vZNd6cHcNEs5pgN8pqADT5XWU_88L3FHzNJme1Ay0Pk.DYE74ZPU.mjs"
    "https://events.framer.com/script?v=2"
)

for js_url in "${js_files[@]}"; do
    filename=$(basename "$js_url")
    if [[ "$js_url" == *"events.framer.com"* ]]; then
        filename="framer-events-script.js"
    fi
    download_file "$js_url" "assets/js/$filename"
    ((total_files++))
done

echo -e "\n📁 Downloading icons..."
icons=(
    "https://framerusercontent.com/sites/icons/default-favicon-light.v1.png"
    "https://framerusercontent.com/sites/icons/default-favicon-dark.v1.png"
    "https://framerusercontent.com/sites/icons/default-touch-icon.v3.png"
)

for icon_url in "${icons[@]}"; do
    filename=$(basename "$icon_url")
    download_file "$icon_url" "assets/icons/$filename"
    ((total_files++))
done

echo -e "\n📁 Downloading JSON data..."
json_files=(
    "https://framerusercontent.com/sites/5ljtTRSJ5EKVDWRR15i4Sv/searchIndex-fg2gP2XmMQPc.json"
)

for json_url in "${json_files[@]}"; do
    filename=$(basename "$json_url")
    download_file "$json_url" "assets/data/$filename"
    ((total_files++))
done

echo -e "\n==============================================="
echo "Download Summary:"
echo "==============================================="
echo "Total files: $total_files"
echo "Successful downloads: $successful_downloads"
echo "Failed downloads: $failed_downloads"
echo "==============================================="

if [ $failed_downloads -eq 0 ]; then
    echo "✅ All assets downloaded successfully!"
else
    echo "⚠️  Some downloads failed. Please check the output above."
fi