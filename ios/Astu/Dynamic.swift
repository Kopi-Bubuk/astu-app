//
//  Dynamic.swift
//  Astu
//
//  Created by Sebastianus Bara Primananda on 15/06/22.
//

import Foundation
import UIKit
import Foundation
import Lottie

// extension UIColor {
// 	convenience init(hex: Int) {
// 		let components = (
// 			R: CGFloat((hex >> 16) & 0xff) / 255,
// 			G: CGFloat((hex >> 08) & 0xff) / 255,
// 			B: CGFloat((hex >> 00) & 0xff) / 255
// 		)
// 		self.init(red: components.R, green: components.G, blue: components.B, alpha: 1)
// 	}
// }

@objc class Dynamic: NSObject {
  @objc func createAnimationView(rootView: UIView, lottieName: String) -> AnimationView {
    let animationView = AnimationView(name: lottieName)
    animationView.frame = rootView.frame
    animationView.center = rootView.center
    animationView.backgroundColor = UIColor.black
    animationView.contentMode = .scaleAspectFill
    return animationView;
  }

  @objc func play(animationView: AnimationView) {
    animationView.play(
      completion: { (success) in
        RNSplashScreen.setAnimationFinished(true)
      }
    );
  }
}
