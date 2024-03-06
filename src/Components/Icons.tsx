import { HTMLAttributes } from 'react'

interface Icon extends HTMLAttributes<HTMLOrSVGElement> {
  width: string
  height: string
  className?: string
}

export const TerrorIcon = ({ width, height, className, ...restProps }: Icon) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 512 512" className={className} {...restProps}>
      <path
        fill="currentColor"
        d="M250.594 20.906c-45.425.318-89.65 20.975-112.78 61.282c-22.594 39.374-34.23 82.722-31.314 115.406c1.458 16.34 6.393 29.793 14.72 39.5c8.325 9.706 20.104 16.173 37.53 18.03l11 1.19l-3 10.655c-2.337 8.272-3.75 16.256-3.75 24.905c0 27.038 4.292 79.342 18.5 123.563c7.104 22.11 16.715 42.157 28.78 56.093c12.068 13.938 25.855 21.845 43.814 21.845c17.96 0 31.777-7.907 43.844-21.844c12.066-13.935 21.677-33.982 28.78-56.092c14.21-44.22 18.5-96.525 18.5-123.563c0-8.65-1.41-16.635-3.75-24.906l-2.968-10.533l10.875-1.28c17.146-2.04 29.05-8.367 37.47-17.72c8.417-9.352 13.49-22.17 15-38c3.02-31.66-8.958-74.675-34.814-117.03c-25.5-41.774-70.927-61.8-116.374-61.5h-.062zM173.406 145.47c24.447 0 44.063 19.58 44.063 44.03a43.922 43.922 0 0 1-44.064 44.063c-24.446 0-44.03-19.617-44.03-44.063s19.584-44.03 44.03-44.03zm161.438 0c24.447 0 44.062 19.58 44.062 44.03a43.921 43.921 0 0 1-44.062 44.063c-24.447 0-44.03-19.617-44.03-44.063a43.864 43.864 0 0 1 44.03-44.03m-162.47 35.093c-6.623 0-11.78 5.188-11.78 11.812s5.157 11.78 11.78 11.78c6.625 0 11.814-5.156 11.814-11.78c0-6.627-5.188-11.813-11.813-11.813zm164.22 0c-6.624 0-11.78 5.188-11.78 11.812c-.002 6.624 5.156 11.78 11.78 11.78s11.812-5.156 11.812-11.78c0-6.627-5.187-11.813-11.812-11.813zm-81.406 51.906c38.762 0 68.875 36.01 68.875 78.593c0 19.938-2.457 56.192-11.532 88.687c-4.536 16.247-10.655 31.58-19.686 43.563c-9.03 11.98-21.96 20.812-37.656 20.812c-15.696 0-28.626-8.83-37.657-20.813c-9.03-11.98-15.15-27.315-19.686-43.562c-9.075-32.495-11.563-68.75-11.563-88.688c0-42.584 30.145-78.593 68.907-78.593zm0 18.686c-17.93 0-34.16 11.453-43.063 29.063h86.094c-8.895-17.61-25.103-29.064-43.033-29.064zm-27.282 173.938c1.45 2.532 2.956 4.878 4.53 6.97c6.78 8.99 13.692 13.373 22.75 13.373c9.06 0 15.943-4.383 22.72-13.375c1.576-2.09 3.08-4.436 4.53-6.968z"
      />
    </svg>
  )
}

export const ActionIcon = ({ width, height, className, ...restProps }: Icon) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 32" className={className} {...restProps}>
      <g fill="currentColor">
        <path d="M12.18 5.145a.232.232 0 0 0-.035-.325l-.001-.002l-.002-.001l-.005-.004a.521.521 0 0 0-.071-.048a1.42 1.42 0 0 0-.88-.195a.232.232 0 1 0 .048.46a.957.957 0 0 1 .617.148l.005.003c.1.08.244.063.324-.036m-.739.765a.55.55 0 0 0 .016-.137a.421.421 0 0 0-.364-.455a.3.3 0 0 0-.167.052a.59.59 0 0 1 .776.013a.545.545 0 0 1 .175.383a.144.144 0 0 1-.077.134a.143.143 0 0 1-.05.01zm-.137 1.628a.675.675 0 0 1-.512.041a.125.125 0 1 1 .076-.238a.426.426 0 0 0 .533-.27a.125.125 0 0 1 .238.078a.675.675 0 0 1-.335.39" />
        <path d="M11.26 5.91a.401.401 0 0 0 .02-.123c0-.161-.09-.291-.2-.291a.158.158 0 0 0-.107.044a.13.13 0 0 1 .007.04a.08.08 0 0 1-.07.09h-.014a.417.417 0 0 0 .002.242z" />
        <path d="M30.819 22.085L28.646 18.9a1.613 1.613 0 0 0-1.239-.7c-.268 0-.529.084-.746.241l-.129.093l-.74.51l-3.87.341a2.183 2.183 0 0 0-.316-1.3l-1.168-1.993l-.652-1.02a3.424 3.424 0 0 0-.4-.647A14.782 14.782 0 0 1 18.06 11.4l.24-.112l1.063-.42l2.015 1.57a1.47 1.47 0 0 0 1.332 1.176h.154a1.342 1.342 0 0 0 1.248.199l.037-.013l.036-.015a3.13 3.13 0 0 0 1.15-.84a2.342 2.342 0 0 0 .577-2.168l-.038-.094l-.056-.084a3.403 3.403 0 0 0-.96-.956l-.676-.5l-.763-.567L21.915 7.4a4.071 4.071 0 0 0-2.515-.87c-.535 0-1.066.105-1.56.311l-.14.059l-.012-.006l-1.7.647a1.61 1.61 0 0 0 .169-.2c.23-.35.406-.735.52-1.139c.076-.3.15-.6.2-.892c.075-.414.117-.834.127-1.255a2.543 2.543 0 0 0-1.894-2.569a2.665 2.665 0 0 0-.61-.076a.1.1 0 0 1-.055-.012l-.039-.026l-.042-.023a2.064 2.064 0 0 0-.852-.247h-.062a2.1 2.1 0 0 0-.676.1a.205.205 0 0 1-.07.011a.215.215 0 0 1-.1-.023a1.952 1.952 0 0 0-.691-.19h-.142c-.486 0-.953.185-1.307.518a1.867 1.867 0 0 0-1.1 3.216a2.921 2.921 0 0 0-.016.248l-.009.485a3.12 3.12 0 0 1-.165.246l-.008.01a1.49 1.49 0 0 0-.333.789a1.4 1.4 0 0 0 .5 1.192a2.334 2.334 0 0 0 2.245 2.359l-.037.142c-.034.134-.065.269-.094.405a4.928 4.928 0 0 1-3.83-.473a1.956 1.956 0 0 0-.89-1.044a1.388 1.388 0 0 0-.84-.195a1.322 1.322 0 0 0-.547-.118c-.186 0-.37.038-.541.111l-.033.009l-.032.017a3.352 3.352 0 0 0-1.1.9l-.023.029l-.021.03a2.37 2.37 0 0 0-.29 2.076l.03.09l.046.083c.218.392.52.73.885.99l.047.033l.05.028l.35.193a9.176 9.176 0 0 0 6.626 1.645c.066-.008.131-.018.2-.029c.2.808.505 1.586.906 2.315l-.34.3l-1.7 1.45l-.1.085l-.075.108a8.45 8.45 0 0 0-1.178 2.518L7.408 26.15H5a1.335 1.335 0 0 0-1.245 1.066a1.378 1.378 0 0 0 .43 1.616c.591.38 3.153 1.754 3.443 1.909a1.454 1.454 0 0 0 .706.179a1.477 1.477 0 0 0 1.315-.8l.753-1.394l3.236-5.673l.362-.275c.017.01.035.017.054.022a.384.384 0 0 1 .046.018c.073.041.148.078.225.111l.033.011l.032-.005c.228.081.468.125.71.13a2.256 2.256 0 0 0 1.115-.294a2.37 2.37 0 0 0 .252-.182h.022a.2.2 0 0 0 .019-.02a.154.154 0 0 1 .018-.019c.154-.122.292-.265.409-.423l.157-.218l.79 1.088l.004.003a3 3 0 0 0 3.014 1.1l5.409-1.212l2.568 1.3c.163.082.342.124.524.124a1.544 1.544 0 0 0 1.091-.531c.076-.052.146-.11.211-.176l.064-.064l.052-.074a1.21 1.21 0 0 0 0-1.382m-12.082.37l2.179-1.38l.01-.007c.263-.171.483-.395.65-.654l4.554-.401l-.029.027l.391 1.779l-5.804 1.3a2 2 0 0 1-1.951-.663m-1.968-1.79l-.144.175l-.508.7a1.27 1.27 0 0 1-.31.279a.303.303 0 0 0-.042.038a.233.233 0 0 1-.05.044a.354.354 0 0 1-.058.026a1.302 1.302 0 0 1-.458.133h-.143a1.284 1.284 0 0 1-.845-.357l-2.5-2.453l1.048-.9l.971-.851v-.007l5.042-2.177c.01.019.022.036.034.054l.01.015a.989.989 0 0 1 .066.113c.031.064.06.13.087.195l1.013 1.677l.008-.027l.76 1.258a1.2 1.2 0 0 1-.37 1.63l-2.226 1.411l-.575-.922a.5.5 0 0 0-.81-.053m1.458-12.903a3.086 3.086 0 0 1 1.583-.205a3.07 3.07 0 0 1 1.484.627l2.275 1.772l.015-.018l.7.52c.278.18.516.415.7.69c.11.27-.13.81-.41 1.14c-.212.248-.48.443-.78.57a.429.429 0 0 1-.123.021a.472.472 0 0 1-.377-.271h-.52c-.359-.024-.457-.416-.477-.728L19.88 9.994a.765.765 0 0 0-.773-.104H19.1l-.673.266l-.727-1.842l-.02-.044a1.342 1.342 0 0 0-.133-.236zM9.971 6.317c.086-.115.166-.234.239-.357a.875.875 0 0 0 .13-.45l.01-.51c.005-.264.069-.524.185-.761l1.96.12a.5.5 0 0 1 .45.35c.02.065.027.133.02.2a.42.42 0 0 0 .38.44l.07.006V5.35a.743.743 0 0 1 .365 1.356a.837.837 0 0 0 .8.484c.01 0 .02-.003.032-.005l.011-.003l.57 1.122l-.7.289A2.385 2.385 0 0 0 13.1 9.4l-.229-.458a3.47 3.47 0 0 1-.978.152h-.033c-1.35-.02-1.54-.83-1.55-1.96a.088.088 0 0 0-.07-.09c-.14-.03-.43-.11-.41-.43a.529.529 0 0 1 .141-.297m4.652.865l-.001-.002h.013a.132.132 0 0 0-.012.002m-2.306 6.609a8.238 8.238 0 0 1-7.072-1.267l-.4-.222a2.017 2.017 0 0 1-.59-.66a1.369 1.369 0 0 1 .17-1.2a2.37 2.37 0 0 1 .77-.63a.367.367 0 0 1 .15-.032c.071.007.14.03.2.069a.413.413 0 0 1 .1.1a6.469 6.469 0 0 0-.589.751l-.01.02a.507.507 0 0 0-.024.341a.462.462 0 0 0 .161.234a.5.5 0 0 0 .228.1a.269.269 0 0 0 .233-.055v.273a.131.131 0 0 0 .012.047a.145.145 0 0 0 .03.039c.012.01.027.02.042.025a.132.132 0 0 0 .096-.006a.114.114 0 0 0 .039-.03a.11.11 0 0 0 .024-.042a.112.112 0 0 0 .007-.048a1.315 1.315 0 0 1 .06-.584l.009-.02l.074-.09a.125.125 0 0 0 0-.158c-.037-.045-.12-.086-.22.023a.426.426 0 0 0-.061.085c-.087.1-.18.2-.277.3a.076.076 0 0 1-.03 0a.26.26 0 0 1-.112-.051a.228.228 0 0 1-.077-.109a.262.262 0 0 1 .013-.168c.22-.327.473-.63.753-.908v-.016c.071.002.14.024.2.063a1.12 1.12 0 0 1 .538.822a5.929 5.929 0 0 0 5.56.577a16 16 0 0 0-.007 2.427m.551 8.589L9.31 28.62l-.076-.051L8.19 27.15H8.1l1.9-5.08c.211-.76.542-1.48.979-2.136l2.23 2.185z" />
      </g>
    </svg>
  )
}

export const FictionIcon = ({ width, height, className, ...restProps }: Icon) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 512 512" className={className} {...restProps}>
      <path
        fill="currentColor"
        d="M115.703 19.684C74.03 56.01 47.746 108.598 47.746 167.047c0 59.615 27.327 113.03 70.47 149.428a155.462 155.462 0 0 1-4.03-29.4c-29.71-31.86-47.75-73.932-47.75-120.028c0-60.944 31.49-114.743 79.876-147.363zm245.98 0c48.38 32.614 79.874 86.417 79.874 147.363c0 44.114-16.52 84.543-43.98 115.863a156.09 156.09 0 0 1-3.272 29.645c40.52-36.26 65.94-88.003 65.94-145.508c0-58.446-26.263-111.034-67.93-147.363zM259.616 21.13c-1.22.046-2.1.16-2.627.16c-22.966 0-42.474 13.933-54.28 34.743a45.768 45.768 0 0 1 17.602-3.512c2.635 0 5.216.238 7.733.667c8.205-8.343 18.363-13.208 28.945-13.208c2.87 0 4.478-.11 4.53-.103l.09.014l.09.012c8.883 1.155 17.385 5.918 24.452 13.31a45.893 45.893 0 0 1 7.895-.69a45.77 45.77 0 0 1 17.377 3.423c-10.47-18.69-27.132-31.908-47.215-34.556a25.32 25.32 0 0 0-4.593-.26zm-58.758.925C139.302 43.72 95.366 100.54 95.366 167.23c0 26.838 7.12 52.075 19.633 74.07c4.785-43.393 27.372-81.088 59.895-104.857c-4.985-11.973-7.76-25.238-7.76-39.2c0-30.428 13.17-57.555 33.724-75.188m112.966.884c19.968 17.648 32.7 44.38 32.7 74.304c0 14.4-2.955 28.06-8.24 40.324c31.91 23.98 53.94 61.508 58.454 104.57c12.815-22.19 20.12-47.727 20.12-74.908c0-65.8-42.768-121.992-103.034-144.29m-93.514 48.27c-15.31 0-27.52 12.21-27.52 27.522c0 15.31 12.21 27.522 27.52 27.522c15.31 0 27.524-12.21 27.524-27.522c0-15.31-12.213-27.523-27.524-27.523zm73.735 0c-15.31 0-27.522 12.21-27.522 27.522c0 15.31 12.21 27.522 27.522 27.522c15.31 0 27.523-12.21 27.523-27.522c0-15.31-12.212-27.523-27.523-27.523zm-96.818 67.495a89.797 89.797 0 0 0 5.014 10.688c-28.76 10.036-47.118 36.23-56.088 67.806c-10.313 36.304-9.78 80.714-1.82 123.044l1.432 7.617h38.28l.354 5.406l.04 4.084l.23-.002l9.09 137.91h122.584l10.408-139.71l.385.003l.038-5.708l.148-1.98h40.32l1.543-7.446c9.072-43.706 8.052-87.865-3.38-123.508c-9.866-30.763-28.282-55.794-54.945-66.185a89.403 89.403 0 0 0 5.68-11.678a45.777 45.777 0 0 1-22.498 5.898c-.516 0-1.025-.03-1.537-.047a62.487 62.487 0 0 1-3.858 5.21l-10.125 12.212l15.59 2.934c25.758 4.847 43.76 25.75 53.9 57.363c9.523 29.697 11.076 68.077 4.198 106.557h-24.893l.64-91.475l-18.687-.13l-.78 111.488L299 476.568h-33.332V342.19H246.98v134.38h-35.72l-8.174-124.025l-1.133-115.002l-18.69.185l.903 91.447h-22.713c-6.188-37.77-5.89-76.687 2.682-106.865c9.15-32.208 26.076-53.426 54.59-57.848l15.91-2.47L224.6 149.4a61.976 61.976 0 0 1-3.256-4.488c-.345.008-.685.03-1.03.03a45.79 45.79 0 0 1-23.085-6.237z"
      />
    </svg>
  )
}

export const DramaIcon = ({ width, height, className, ...restProps }: Icon) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24  " className={className} {...restProps}>
      <path
        fill="currentColor"
        d="M8.11 19.45a6.948 6.948 0 0 1-4.4-5.1L2.05 6.54c-.24-1.08.45-2.14 1.53-2.37l9.77-2.07l.03-.01c1.07-.21 2.12.48 2.34 1.54l.35 1.67l4.35.93h.03c1.05.24 1.73 1.3 1.51 2.36l-1.66 7.82a6.993 6.993 0 0 1-8.3 5.38a6.888 6.888 0 0 1-3.89-2.34M20 8.18L10.23 6.1l-1.66 7.82v.03c-.57 2.68 1.16 5.32 3.85 5.89c2.69.57 5.35-1.15 5.92-3.84zm-4 8.32a2.962 2.962 0 0 1-3.17 1.39a2.974 2.974 0 0 1-2.33-2.55zM8.47 5.17L4 6.13l1.66 7.81l.01.03c.15.71.45 1.35.86 1.9c-.1-.77-.08-1.57.09-2.37l.43-2c-.45-.08-.84-.33-1.05-.69c.06-.61.56-1.15 1.25-1.31h.25l.78-3.81c.04-.19.1-.36.19-.52m6.56 7.06c.32-.53 1-.81 1.69-.66c.69.14 1.19.67 1.28 1.29c-.33.52-1 .8-1.7.64c-.69-.13-1.19-.66-1.27-1.27m-4.88-1.04c.32-.53.99-.81 1.68-.66c.67.14 1.2.68 1.28 1.29c-.33.52-1 .81-1.69.68c-.69-.17-1.19-.7-1.27-1.31m1.82-6.76l1.96.42l-.16-.8z"
      />
    </svg>
  )
}

export const SuspenseIcon = ({ width, height, className, ...restProps }: Icon) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24  " className={className} {...restProps}>
      <g fill="none">
        <path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
        <path
          fill="currentColor"
          d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 9a3 3 0 0 0-3 3v1a3 3 0 1 0 6 0v-1a3 3 0 0 0-3-3m0 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1M8.422 7.276c-.46.115-.895.383-1.245.733c-.35.35-.618.785-.733 1.245c-.11.437-.113 1.091.38 1.583c.492.493 1.146.489 1.583.38c.46-.115.894-.383 1.245-.733c.35-.35.618-.785.732-1.245c.11-.437.114-1.091-.379-1.584c-.492-.492-1.146-.488-1.583-.379m5.573.38c-.493.492-.489 1.146-.38 1.583c.115.46.383.895.733 1.245c.35.35.785.618 1.245.733c.437.109 1.091.113 1.584-.38c.492-.492.488-1.146.379-1.583c-.115-.46-.383-.895-.733-1.245c-.35-.35-.785-.618-1.245-.733c-.437-.109-1.09-.113-1.583.38"
        />
      </g>
    </svg>
  )
}

export const SettingIcon = ({ width, height, className, ...restProps }: Icon) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" className={className} {...restProps}>
      <path
        fill="currentColor"
        d="M19.9 12.66a1 1 0 0 1 0-1.32l1.28-1.44a1 1 0 0 0 .12-1.17l-2-3.46a1 1 0 0 0-1.07-.48l-1.88.38a1 1 0 0 1-1.15-.66l-.61-1.83a1 1 0 0 0-.95-.68h-4a1 1 0 0 0-1 .68l-.56 1.83a1 1 0 0 1-1.15.66L5 4.79a1 1 0 0 0-1 .48L2 8.73a1 1 0 0 0 .1 1.17l1.27 1.44a1 1 0 0 1 0 1.32L2.1 14.1a1 1 0 0 0-.1 1.17l2 3.46a1 1 0 0 0 1.07.48l1.88-.38a1 1 0 0 1 1.15.66l.61 1.83a1 1 0 0 0 1 .68h4a1 1 0 0 0 .95-.68l.61-1.83a1 1 0 0 1 1.15-.66l1.88.38a1 1 0 0 0 1.07-.48l2-3.46a1 1 0 0 0-.12-1.17ZM18.41 14l.8.9l-1.28 2.22l-1.18-.24a3 3 0 0 0-3.45 2L12.92 20h-2.56L10 18.86a3 3 0 0 0-3.45-2l-1.18.24l-1.3-2.21l.8-.9a3 3 0 0 0 0-4l-.8-.9l1.28-2.2l1.18.24a3 3 0 0 0 3.45-2L10.36 4h2.56l.38 1.14a3 3 0 0 0 3.45 2l1.18-.24l1.28 2.22l-.8.9a3 3 0 0 0 0 3.98m-6.77-6a4 4 0 1 0 4 4a4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2"
      />
    </svg>
  )
}

export const MenuIcon = ({ width, height, className, ...restProps }: Icon) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" className={className} {...restProps}>
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M4 12h16M4 6h16M4 18h16" />
    </svg>
  )
}
