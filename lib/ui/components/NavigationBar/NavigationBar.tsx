import Link from "next/link";
import { Fragment } from "react/jsx-runtime";

import "./NavigationBar.css";

type Section = {
  text: string;
  path: string;
  sections?: Section[];
};

type Props = {
  activePath?: string;
  pathPrefix: string;
  sections: Section[];
};

export function NavigationBar({ activePath, pathPrefix, sections }: Props) {
  return (
    <div className="navbar__wrapper">
      <aside className="navbar">
        {sections.map((s) => (
          <Fragment key={s.path}>
            <Link
              href={`${pathPrefix}${s.path}`}
              className={
                activePath === s.path
                  ? "navbar__link navbar__link--active"
                  : "navbar__link"
              }
            >
              {s.text}
            </Link>
            {s.sections && (
              <div className="navbar__subsection-wrapper">
                {s.sections.map((sub) => (
                  <Link
                    key={`${s.path}${sub.path}`}
                    href={`${pathPrefix}${s.path}${sub.path}`}
                    className={
                      activePath === `${s.path}${sub.path}`
                        ? "navbar__link navbar__link--active"
                        : "navbar__link"
                    }
                  >
                    {sub.text}
                  </Link>
                ))}
              </div>
            )}
          </Fragment>
        ))}
      </aside>
    </div>
  );
}
